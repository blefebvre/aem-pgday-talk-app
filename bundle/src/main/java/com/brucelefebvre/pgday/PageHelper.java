package com.brucelefebvre.pgday;
  
import com.adobe.cq.sightly.WCMUse;
import com.adobe.cq.mobile.angular.data.util.FrameworkContentExporterUtils;
import org.apache.sling.api.resource.Resource;
import com.day.cq.wcm.api.Page;
  
public class PageHelper extends WCMUse {

    Resource topLevelAppResource;
    boolean appExport;
    Resource imageResource;
    String imageSrc;
    Page page;

    @Override
    public void activate() throws Exception {
        page = get("page", Page.class);
        topLevelAppResource = FrameworkContentExporterUtils.getTopLevelAppResource(page.adaptTo(Resource.class));
        appExport = Boolean.parseBoolean(getRequest().getParameter("appExport"));
        imageResource = page.getContentResource("image");
    }

    public String getRelPathToPageImage() {
        if (imageResource != null) {
            imageSrc = page.getPath() + ".img.png";
            imageSrc = FrameworkContentExporterUtils.getPathToAsset(topLevelAppResource, imageSrc, appExport);
            
            return imageSrc;
        }

        return null;
    }

    public String getRelativePathToRoot() {
        return FrameworkContentExporterUtils.getRelativePathToRootLevel(page.adaptTo(Resource.class));
    }
}