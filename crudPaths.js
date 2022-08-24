const fs = require('fs');
let changed = true;
const paths = require('./paths.json');

function addPath(namePath, route)
{
    if(paths.paths.filter(path => path.route == route).length === 0)
    {
        paths.paths.push(
            {
                namePath: namePath,
                route:route
            }
        );
    }
}

function deletePath(route)
{

}
function saveChanges()
{
    console.log(paths)
    fs.writeFileSync(__dirname + '/paths.json', JSON.stringify(paths), (err)=>{ return false});
    return true;
}


exports.addPath = addPath;
exports.saveChanges = saveChanges;