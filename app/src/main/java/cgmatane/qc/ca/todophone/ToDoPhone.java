package cgmatane.qc.ca.todophone;

import android.os.Bundle;
import org.apache.cordova.*;
import org.apache.cordova.DroidGap;

public class ToDoPhone extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
