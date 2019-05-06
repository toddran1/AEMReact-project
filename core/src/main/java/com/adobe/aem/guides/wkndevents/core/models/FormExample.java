package com.adobe.aem.guides.wkndevents.core.models;

import java.util.List;

/** 
 * Represents the Byline AEM Component for the WKND Site project.
 **/
public interface FormExample {
    /***
     * @return a string to display as the text1 and text2.
     */
    String getText1();
 
    String getText2();
    /***
     * @return a boolean if the component has content to display.
     */
    boolean isEmpty();
}