import Twit from 'twit';
import dotenv from 'dotenv';
import {conflictError, responseCreateOk, 
    responseOk, serverError, 
    authenticationSuccess, 
    authenticationError,
    notFoundError } from '../utils/responses';
import { error } from 'util';
import User from '../models/user';
import Query from '../models/query';

dotenv.load();

const tweeter = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,
    strictSSL:            true, 
})


class TwitterController {
    static getTrends(request, response, next) {
        // console.log(request.userData)
        const { long, lat } = request.params;
        const { email } = request.userData;
        tweeter.get('trends/closest', { lat, long }, (err, data, res) => {
            if(err) {
                serverError(response, err)
            } else {
                const id = data[0].woeid;
                tweeter.get('trends/place', {id}, (err2, data2, res2) => {
                    if(err2){
                        serverError(response, err2)
                    } else {
                        const responseData = {
                            count: data2[0].trends.length,
                            trends: data2[0].trends.map(record => {
                                return {
                                    name: record.name,
                                    url: record.url,
                                    promotedContent: record.promoted_content,
                                    query: record.query,
                                    tweetVolume: record.tweet_volume,
                                }
                            })
                        };
                        User.findOne({ email })
                        .exec()
                        .then(user => {
                            if (user) {
                                const query = new Query({longitude: long, latitude: lat})
                                user.queries.push(query)
                                user.save()
                            } else {
                                serverError(response, "User does not exist")
                            }
                    });
                    responseOk(response, responseData)
                    }
                })
            }
          })
    }

    static searchTweets(request, response, next) {
        const { geocode, q } = request.params;
        const { email } = request.userData;
        tweeter.get('search/tweets', {geocode, q, count:100}, (error, data, res) => {
            if(error) {
                serverError(response, error)
            } else {
                const responseData = {
                    count: data.statuses.length,
                    statuses: data.statuses.map(record => {
                     const userData = {
                         id: record.user.id_str,
                         name: record.user.name,
                         screenName: record.user.screen_name,
                         location: record.user.location,
                         description: record.user.description,
                         url: record.user.url,
                         profileImage: record.user.profile_image_url_https
                     }
                      return {
                        id: record.id,
                        idString: record.id_str,
                        text: record.text,
                        user: userData,
                        createdAt: record.created_at

                      };
                    })
                  };
                  User.findOne({ email })
                  .exec()
                  .then(user => {
                      if (user) {
                          const query = new Query({geocode, query: q})
                          user.queries.push(query)
                          user.save()
                      } else {
                          serverError(response, "User does not exist")
                      }
                });
                responseOk(response, responseData);
            }
        })
    }

    static searchUsers(request, response, next) {
        const { geocode, q } = request.params;
        const { email } = request.userData;
        tweeter.get('search/tweets', {geocode, q, count:100}, (error, data, res) => {
            if(error) {
                serverError(response, error)
            } else {
                const responseData = {
                    count: data.statuses.length,
                    users: data.statuses.map(record => {
                        return {
                            id: record.user.id_str,
                            name: record.user.name,
                            screenName: record.user.screen_name,
                            location: record.user.location,
                            description: record.user.description,
                            url: record.user.url,
                            profileImage: record.user.profile_image_url_https
                        }
                    })
                  };
                  User.findOne({ email })
                  .exec()
                  .then(user => {
                      if (user) {
                          const query = new Query({geocode, query: q})
                          user.queries.push(query)
                          user.save()
                      } else {
                          serverError(response, "User does not exist")
                      }
                });
                responseOk(response, responseData);
            }
        })
    }
}

export default TwitterController