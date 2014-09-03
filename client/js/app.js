(function() {
    var config = {
        host: 'dev.mbst.tv:9090',
        paths: [
            '/4/auth/providers.json']
    }

    var xhr = new XMLHttpRequest()
    xhr.open( 'GET', 'http://'+config.host + config.paths[0], true );
    xhr.onload = function( e ) {
        if ( xhr.readyState === 4 ) {
            if ( xhr.status === 200 ) {
                console.log('req made');
                console.log(xhr.responseText)
            }else{
                console.error('request error: '+xhr.status);
            }
        }
    }
    xhr.onerror = function( e ) {
        console.error(':( '+xhr.statusText);
    }
    xhr.send(null);
}).call( this );
