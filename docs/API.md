## 登录
URL: /user/<int:user_id>/authorized  
Method: GET  

Response:
```json
{
    "tiwtter_auth": "Boolean",
    "facebook_auth": "Boolean"
}
```

## Twitter 授权
URL: /twitter/authorize  
Method: GET  


## Twitter 用户数据统计

URL: /user/<user_id>/twitter/summary  
Method: GET  
Data:
```json
{
    "datetime": "String",
    "period": "String"
}
```
Parameters:

参数      | 描述        | Example
-------- | ----------- | -------
datetime | 用户访问的时间 |
period   | 周期 | day / week / month


Response:
```json
{
    "tweets": "Integer",
    "mentions": "Integer"
}
```

## Twitter 更新 Tweets
URL: /user/<user_id>/twitter/user_timeline/update  
Method: GET  

Response:
```json
{
    "msg": "success"
}
```

## Twitter sentiment 列表接口
URL: /user/<int:user_id>/twitter/sentiment  
Method: GET  

Data:  
```json
{
    "datetime": "2018-11-20 13:55:03+0800"
}
```

Response:
```json
[
  {
    "content": "Content",
    "created_at": "Fri, 18 Nov 2016 02:53:24 GMT",
    "score": 0.5
  }
]
```


## Twitter 更新 Mentions
URL: /user/<user_id>/twitter/mentions_timeline/update  
Method: GET  

Response:
```json
{
    "msg": "success"
}
```


## Facebook 用户统计接口

URL: /user/<user_id>/facebook/summary  
Method: GET  
Data:
```json
{
    "datetime": "String",
    "period": "String"
}
```
Parameters:

参数      | 描述        | Example
-------- | ----------- | -------
datetime | 用户访问的时间 |
period   | 周期 | day / week / month


Response:
```json
{
    "posts": "Integer",
}
```

## Facebook 更新 Posts
URL: /user/<user_id>/facebook/posts/update  
Method: GET  

Response:
```json
{
    "msg": "success"
}
```

## Facebook sentiment 列表接口
URL: /user/<int:user_id>/facebook/sentiment  
Method: GET  
Data:
```json
{
    "datetime": "2018-11-20 13:55:03+0800"
}
```
Response:
```json
[
  {
    "content": "Content",
    "created_at": "Sun, 11 Dec 2016 04:26:56 GMT",
    "score": 0.9970524907112122
  }
]
```

## 存储用户地理位置及天气接口，并展示当日天气
URL: /user/<user_id>/location_and_weather/create  
Method: POST  
Data:
```json
{
    "latitude": "Float",
    "longitude": "Float"
}
```

Response:
```json
{
    "data": [
        {
            "apparentTemperatureHigh": 11.39,
            "apparentTemperatureHighTime": 1542693600,
            "apparentTemperatureLow": -0.46,
            "apparentTemperatureLowTime": 1542758400,
            "apparentTemperatureMax": 11.39,
            "apparentTemperatureMaxTime": 1542693600,
            "apparentTemperatureMin": -7.22,
            "apparentTemperatureMinTime": 1542657600,
            "cloudCover": 0.55,
            "dewPoint": -8.93,
            "humidity": 0.44,
            "icon": "partly-cloudy-night",
            "moonPhase": 0.39,
            "ozone": 335.53,
            "precipIntensity": 0,
            "precipIntensityMax": 0.0025,
            "precipIntensityMaxTime": 1542675600,
            "precipProbability": 0,
            "pressure": 1024.2,
            "summary": "Mostly cloudy throughout the day.",
            "sunriseTime": 1542668765,
            "sunsetTime": 1542704183,
            "temperatureHigh": 11.39,
            "temperatureHighTime": 1542693600,
            "temperatureLow": 0.66,
            "temperatureLowTime": 1542754800,
            "temperatureMax": 11.39,
            "temperatureMaxTime": 1542693600,
            "temperatureMin": -3.09,
            "temperatureMinTime": 1542657600,
            "time": 1542643200,
            "uvIndex": 2,
            "uvIndexTime": 1542682800,
            "visibility": 16.09,
            "windBearing": 21,
            "windGust": 4.1,
            "windGustTime": 1542704400,
            "windSpeed": 1.28
        }
    ]
}
```


## 创建心情接口
URL: /user/<user_id>/mood/create  
Method: POST  
Data:

```json
{
    "detail": "String",
    "score": "Integer"
}
```

Response:

```json
{
    "msg": "success"
}
```

## 展示心情列表接口
URL: /user/<user_id>/mood/list  
Method: GET  
Data:
```json
{
    "datetime": "2018-11-20 13:55:03+0800"
}
```

Response:

```json
[
    {
        "datetime": "Tue, 20 Nov 2018 05:03:40 GMT",
        "detail": "",
        "score": 4
    },
    {
        "datetime": "Tue, 20 Nov 2018 06:13:59 GMT",
        "detail": "happy",
        "score": 4
    }
]
```

## 展示心情平均值列表接口
URL: /user/<user_id>/mood/average/list  
Method: GET  
Data:
```json
{
    "datetime": "2018-11-20 13:55:03+0800",
    "period": "String"
}
```

Response:
```json
[
    {
        "date": "2018-11-20",
        "score": 4,
        "day": 2
    }
]
```

Parameters:

参数      | 描述        | Example
-------- | ----------- | -------
date | 访问当天的日期 | 2018-11-20
day | 这一周这一月第几天 | 2
score   | 平均分（1 - 5） | 4


## Mood sentiment 列表接口
URL: /user/<int:user_id>/mood/sentiment  
Method: GET  
Data:  
```json
{
    "datetime": "2018-11-20 13:55:03+0800"
}
```

Response:  
```json
[
  {
    "content": "Content",
    "created_at": "Sun, 11 Dec 2016 04:26:56 GMT",
    "score": 0.9970524907112122
  }
]
```


## Fitbit 授权
URL: ／login/fitbit    
Method: GET  


## Fitbit Sleep
URL: /user/<int:user_id>/fitbit/sleep/day    
Method: GET  
Data:
```json
{
    "datetime": "2018-11-20 13:55:03+0800"
}
```   

Response:
```json
{
    "stages": {
        "deep": 92,
        "light": 211,
        "rem": 66,
        "wake": 60
    },
    "totalMinutesAsleep": 396,
    "totalSleepRecords": 1,
    "totalTimeInBed": 429
}
```

## Fitbit Sleep 周数据
URL: /user/<user_id>/fitbit/sleep/week  
Method: GET  
Data:
```json
{
    "datetime": "2018-11-20 13:55:03+0800"
}
```

Response:
```json
[
    {
        "day": 3,
        "totalMinutesAsleep": 0,
        "totalSleepRecords": 0,
        "totalTimeInBed": 0
    }
    {
        "day": 4,
        "totalMinutesAsleep": 0,
        "totalSleepRecords": 0,
        "totalTimeInBed": 0
    }
]
```

## Fitbit Activities
URL: /user/<int:user_id>/fitbit/activity/day  
Method: GET  
Data:  
```json
{
    "datetime": "2018-11-20 13:55:03+0800"
}
```   

Response:
详见： https://dev.fitbit.com/build/reference/web-api/activity/#get-daily-activity-summary
```json
{
    "activityCalories":230,
    "caloriesBMR":1913,
    "caloriesOut":2143,
    "distances":[
        {"activity":"tracker", "distance":1.32},
        {"activity":"loggedActivities", "distance":0},
        {"activity":"total","distance":1.32},
        {"activity":"veryActive", "distance":0.51},
        {"activity":"moderatelyActive", "distance":0.51},
        {"activity":"lightlyActive", "distance":0.51},
        {"activity":"sedentaryActive", "distance":0.51},
        {"activity":"Treadmill, 0% Incline", "distance":3.28}
    ],
    "elevation":48.77,
    "fairlyActiveMinutes":0,
    "floors":16,
    "lightlyActiveMinutes":0,
    "marginalCalories":200,
    "sedentaryMinutes":1166,
    "steps":0,
    "veryActiveMinutes":0
}
```

## Fitbit Activities
URL: /user/<int:user_id>/fitbit/activity/week  
Method: GET  
Data:  
```json
{
    "datetime": "2018-11-20 13:55:03+0800"
}
```   

Response:
详见： https://dev.fitbit.com/build/reference/web-api/activity/#get-daily-activity-summary
```json
[
    {
        "activityCalories":230,
        "caloriesBMR":1913,
        "day": 6,
        "caloriesOut":2143,
        "distances":[
            {"activity":"tracker", "distance":1.32},
            {"activity":"loggedActivities", "distance":0},
            {"activity":"total","distance":1.32},
            {"activity":"veryActive", "distance":0.51},
            {"activity":"moderatelyActive", "distance":0.51},
            {"activity":"lightlyActive", "distance":0.51},
            {"activity":"sedentaryActive", "distance":0.51},
            {"activity":"Treadmill, 0% Incline", "distance":3.28}
        ],
        "elevation":48.77,
        "fairlyActiveMinutes":0,
        "floors":16,
        "lightlyActiveMinutes":0,
        "marginalCalories":200,
        "sedentaryMinutes":1166,
        "steps":0,
        "veryActiveMinutes":0
    }
]
```
