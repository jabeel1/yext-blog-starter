import { SitesHttpRequest, HttpFunction, SitesHttpResponse } from "@yext/pages/*"

export default (req : SitesHttpRequest) : SitesHttpResponse => {
    return {
        headers: {},
        body: "<h1>Hello</h1>",
        statusCode: 200
    }
}
