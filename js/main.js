const { createApp } = Vue


createApp({
    data() {
      return {
        hello: "Hello World!",
        img: "https://www.geekandjob.com/uploads/wiki/f236a1aa005ef9a93041f294749e86d1.png",
        flex: ["flex", "font"]
      }
    }
  }).mount('#app')