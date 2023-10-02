describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

it('should add a new server to allServers on submitServerInfo()', function(){
  serverNameInput.value = '';
  expect(Object.keys(allServers).length).toEqual(0);
});


 it('this should update the table with inputed content' , function(){
  submitServerInfo();
  updateServerTable();

  let curTdList = document.querySelectorAll('#serverTable tbody tr td ');//does this 
  expect(curTdList.length).toEqual(4); //.toEqual(3); //because my td for remove
  expect(curTdList[0].innerText).toEqual('Alice');
  expect(curTdList[1].innerText).toEqual('$0.00'); // note 2 dec point
  expect(curTdList[2].innerText).toEqual('x');
 });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = "";
  });
});
