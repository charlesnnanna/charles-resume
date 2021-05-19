module.exports = {

    siteMetadata : {
        description: "Online Resume of Charles Uthulor",
        locale : "en",
        title : "Charles Uthulor",
        formspreeEndpoint : "https://formspree.io/f/xjvjyjdn"

    },
    plugins: [
        {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath : "/",
          contentPath : "content/",
          showThemeLogo : true,
          theme: "blue",
        }
     }
    ]
}