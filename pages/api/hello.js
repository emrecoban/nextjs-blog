// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res){
    res.status(200).json({
        text: "Hi there!",
    });
/*     return {
        text: "hello"
    } */
}