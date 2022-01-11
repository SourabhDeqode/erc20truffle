const BigNumber = web3 BigNumber;
const erc20 = artifacts.require("erc20.json");

require('chai')
    .use(require('chai-bignumber')(BigNumber))
    .should();
contract('My Token', accounts =>{
    const _name = "My Token";
    const _symbol = "MYT";
    const _decimal = 18;

    beforeEach(async function(){
        this.token = await MyToken new(_name, _symbol, _decimas);
    });
    describes('token attributes', function(){
        it('has the correct name', async function(){
            const name = await this.token.name();
            name.should.equal(_name);
        });
        it('has the correct symbol', async function(){
            const symbol = await this.token.symbol();
            symbol.should.equal(_symbol);
        });

        it('has the correct decimal', async function(){
            const decimal = await this.token.decimal();
            decimal.should.be.bigNumber .equal(_decimal);
        });
    });
});
