const Singleton = (() => {
  let instance;

  function createInstance() {
    const object = new Object(
      {
        show: () => console.log('Its a Singleton!')
      }
    );
    return object;
  }

  return {
    getInstance: () => instance || (instance = createInstance()) 
  }
})();

module.exports = Singleton;