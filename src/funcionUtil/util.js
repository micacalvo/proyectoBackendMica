import util from 'util';

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true));
}

print()

export default print