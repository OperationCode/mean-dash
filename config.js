var config = {
    expressPort: 3000,
    client: {
        mongodb: {
            defaultDatabase: "meandash",
            defaultCollection: "meandash",
            defaultUri: "mongodb://squadmean:operationcode@ds155160.mlab.com:55160/"
        },
        mockarooUrl: "http://www.mockaroo.com/536ecbc0/download?count=1000&key=48da1ee0"
    }
};

module.exports = config;
