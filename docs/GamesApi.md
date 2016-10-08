# GameServiceApi.GamesApi

All URIs are relative to *https://cluttery.katlex.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gamesGetCurrentGames**](GamesApi.md#gamesGetCurrentGames) | **GET** /games/current | Returns current games info


<a name="gamesGetCurrentGames"></a>
# **gamesGetCurrentGames**
> [Game] gamesGetCurrentGames()

Returns current games info

Returns following info about current running games: 1. game address 2. finished flag 3. maxAmount maximum bet 4. balance amount of money in the bank 5. timeToFinish msecs to game fininsh 

### Example
```javascript
var GameServiceApi = require('game_service_api');

var apiInstance = new GameServiceApi.GamesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gamesGetCurrentGames(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Game]**](Game.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

