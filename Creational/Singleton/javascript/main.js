function main()
{
  const Singleton = require('./modules/singleton.js');
  // console.log(Singleton)
  const singleton = Singleton.getInstance();
  singleton.show();
}

main();