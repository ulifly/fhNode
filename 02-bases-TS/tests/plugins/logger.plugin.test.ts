import { buildLogger, logger as winstionLogger } from "../../src/plugins/logger.plugin";

describe('Logger Plugin', () => {

test('it shoul be a function', () => {
    const logger = buildLogger('test');
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
    });

    test('it should log messages', () => {
        const winstonLoggerMock = jest.spyOn(winstionLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);
        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({ 
                message, 
                service 
            })
        
        ); 

    });

});