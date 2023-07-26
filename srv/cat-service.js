const cds = require('@sap/cds')
module.exports = function ()
{
    this.on( 'CREATE', 'Holes', (req,next)=>
    {
        const holeinfo = req.data
        const diff = holeinfo.score - holeinfo.par
        switch (diff) 
        {
            case -3:
                holeinfo.result = 'albatross'
                break;
            case -2:
                holeinfo.result = 'eagle'
                break;
            case -1:
                holeinfo.result = 'birdie'
                break;
            case 0:
                holeinfo.result = 'par'
                break;
            case 1:
                holeinfo.result = 'bogey'
                break;
            case 2:
                holeinfo.result = 'double bogey'
                break;
            case 3:
                holeinfo.result = 'triple bogey'
                break;
            default:
                break;
        }
        if (holeinfo.score == 1)
        {
            holeinfo.result = 'hole in one'
        }
        return next();
    })
}