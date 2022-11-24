const Image = require("@11ty/eleventy-img");
const path = require("path");

(async () => {
    let url = "https://images.unsplash.com/photo-1608178398319-48f814d0750c";
    let stats = await Image(url, {
      widths: [300]
    });
  
    console.log( stats );
  })();

async function imageShortcode(src, alt) {
    let metadata = await Image(`src/img/${src}`, {
        widths: [200],
        formats: ["jpg", null],
        outputDir: "./dist/img",
        urlPath: "/img/",
        filenameFormat: function (id, src, width, format, options) {
        const target = src
            .split("/")
            .filter((e, i) => i > 1)
            .join("/");
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        // return target;
        return `${name}.${format}`;
        },
        sharpJpegOptions: {
        quality: 60,
        },
        sharpPngOptions: {
        quality: 60,
        },
    });

    let imageAttributes = {
        alt,
        sizes: [1000],
        loading: "lazy",
        decoding: "async",
    };

    // You bet we throw an error on missing alt in imageAttributes (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);
}