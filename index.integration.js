import log from 'ee-log';
import ServiceManager from '@infect/rda-service-manager';


(async() => {

    const serviceManager = new ServiceManager({
        args: '--related-errors --data-for-beta --integration --log-level=error+ --log-module=*'.split(' ')
    });

    await serviceManager.startServices('rda-service-registry');
    await serviceManager.startServices('rda-compute', 'rda-compute', 'rda-compute', 'rda-compute', 'rda-compute', 'rda-compute', 'rda-compute', 'rda-compute');
    //await serviceManager.startServices('rda-compute', 'rda-compute', 'rda-compute', 'rda-compute', 'rda-compute', 'rda-compute', 'rda-compute', 'rda-compute');
    await serviceManager.startServices('rda-cluster');
    await serviceManager.startServices('rda-coordinator');
    await serviceManager.startServices('infect-rda-sample-storage');
    await serviceManager.startServices('api');
    await serviceManager.startServices('infect-rda-sample-importer');
    await serviceManager.startServices('rda');
})().then(() => {
    log.success('application is ready');
}).catch(log);