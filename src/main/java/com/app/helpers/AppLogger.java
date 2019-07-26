package com.app.helpers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Simple wrapper for classic Log4j logger
 */

@Service
public class AppLogger {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private final String ERROR = "error";

    private final String DEBUG = "debug";

    private final String INFO = "info";

    public AppLogger(){

    }

    private void showLog(String level, String msg){

        switch (level){
            case ERROR:
                logger.error("Error: %s", msg);
                break;
            case DEBUG:
                logger.debug(msg);
                break;
            case INFO:
                logger.info(msg);
                break;
            default:
                break;
        }
    }

    public void logDebug(String msg){
        showLog(DEBUG, msg);
    }

    public void logInfo(String msg){
        showLog(INFO, msg);
    }

    public void logError(String msg){
        showLog(ERROR, msg);
    }
}
