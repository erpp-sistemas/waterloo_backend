import axios from "axios";

export class RequestAdapter {

    static async post(url: string, body: { [key: string]: any }) {
        const res = await axios.post(url, body)
        return res.data;
    }

}