# Imagify NodeJS Client

A TypeScript based NPM package that follows the [Imagify.io](https://imagify.io) API docs.

## API Key

You will need to create an account and get an API key from Imagify.

## ENV Variables Needed

You will need to add the following ENV variables to your project for this to work.

```zsh
API_URL='https://app.imagify.io/api'
API_KEY='your-api-key'
```

## API Endpoints

The entire API consists of three API endpoints, two of which are related to sub-accounts. With a $10/month plan, you get unlimited image optimization. We are not going to worry about the subaccounts at this time.

### Upload Endpoint /upload

#### Query Parameters

Query parameters should be send as a form-data request:

| Parameter | Type   | Description                         |
| --------- | ------ | ----------------------------------- |
| image     | binary | Your image file \* required         |
| data      | json   | A json with optimization parameters |

-   TS Interface:

```typescript
interface ImageParams {
    image: any; // don't have a binary type
    data?: DataParams;
}
```

#### Data Parameters

By filling the data parameter you will be able to control the optimization and to resize images.

| Parameter            | Type | Default | Description                                     |
| -------------------- | ---- | ------- | ----------------------------------------------- |
| normal               | bool | false   | Optimization with a losseless algorithm         |
| aggressive           | bool | true    | Optimization with Agressive algorithm           |
| ultra                | bool | false   | Optimization with Ultra algorithm               |
| keep_exif            | bool | false   | Will allow you to preserve meta data in images  |
| resize               | bool | false   | Array with resize paramater                     |
| resize[“width”]      | int  | false   | Will resize the image with the given width      |
| resize[“height”]     | int  | false   | Will resize the image with the given height     |
| resize[“percentage”] | int  | false   | Will resize the image with the given percentage |

-   TS Interface:

```typescript
interface DataParams {
    normal?: boolean;
    aggressive?: boolean;
    ultra?: boolean;
    keep_exif?: boolean;
    resize?:
        | boolean
        | {
              width?: number;
              height?: number;
              percentage?: number;
          };
}
```

### Expected Response

```json
{
    "code": 200,
    "image": "http://storage.imagify.io/imagify/45dfi7h/1.jpg",
    "new_size": 100,
    "original_size": 200,
    "percent": 50,
    "success": true
}
```

-   TS Interface:

```typescript
interface UploadResponse {
    code: number;
    image: string;
    new_size: number;
    original_size: number;
    percent: number;
    success: boolean;
}
```

## Errors

Imagify API uses the following error codes:

| Error Code | Meaning                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------ |
| 400        | Bad Request – Your request was not understandable.                                         |
| 422        | Already compressed – Your image is already compressed.                                     |
| 403        | Forbidden – You don’t have the proper right to access the data.                            |
| 404        | Not Found – The specified ressource could not be found.                                    |
| 405        | Method Not Allowed – You tried to access an endpoint with an invalid method.               |
| 415        | Unsupported media type – The file you’ve uploaded is not supported.                        |
| 500        | Internal Server Error – We had a problem with our server. Try again later.                 |
| 503        | Service Unavailable – We’re temporarially offline for maintanance. Please try again later. |
