<template>
  <Layout>
    <div class="article">
      <h1>{{ $page.blogPost.title }}</h1>
      <div class="headline">
        <h2>{{ $page.blogPost.date }}</h2>
      </div>  
      <g-image :src="$page.blogPost.image"/>
      <div class="content" v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "MMMM D, YYYY")
      content
      image
    }
  }
</page-query>

<style>
@import url(prism-tomorrow.css);
  /* .header {
    margin-bottom: 70px;
  } */

  .article {
    margin-top: 15px;
  }

  .article h1 {
    font-size: 32px;
    text-align: center;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 100;
    line-height: 1.4em;
  }

  .article h2 {
    font-size: 13px;
    letter-spacing: 1px;
    color: #b2b9be;
    text-align: center;
  }

  .headline {
    margin: 20px 0 20px 0;
  }

  .article img {
    width: 100%;
    border-radius: 5px;
  }

  .article a {
    color: #4dba87;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
    line-height: 1.7;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
    color: #cdd4da;
  }

  pre {
    font-size: 12px;
    word-wrap: break-word;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    padding: 16px;
    padding-bottom: 14px;
    margin: 20px 0 20px 0;
    display: block;
    border: 1px dotted #cdd4da;
    border-radius: 4px;
    overflow: auto;
  }

  @media screen and (max-width: 540px) {
    #wrapper {
      max-width: 600px;
    }
  }

@media (max-width: 700px) {
  nav.main-nav {
      padding: 20px 10px 0 0;
      margin: 0 auto;
      text-align: right;
      z-index: 100;
  }
  nav.main-nav a {
      top: 8px;
      right: 6px;
      padding: 8px 8px;
      font-size: 13px;
      line-height: 1.35;
      border-radius: 3px;
  }
}

</style>
