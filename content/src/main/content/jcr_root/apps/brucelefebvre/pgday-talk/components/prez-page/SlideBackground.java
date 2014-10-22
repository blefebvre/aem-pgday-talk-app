package apps.brucelefebvre.pgday_talk.components.prez_page;
  
import com.adobe.cq.sightly.WCMUse;
import com.adobe.cq.mobile.angular.data.util.FrameworkContentExporterUtils;
import org.apache.sling.api.resource.Resource;
  
public class SlideBackground extends WCMUse {

    Resource topLevelAppResource;
    boolean appExport;
    Resource imageResource;
    String imageSrc;

    @Override
    public void activate() throws Exception {
        topLevelAppResource = FrameworkContentExporterUtils.getTopLevelAppResource(getCurrentPage().adaptTo(Resource.class));
        appExport = Boolean.parseBoolean(getRequest().getParameter("appExport"));
        imageResource = getCurrentPage().getContentResource("image");
    }

    public String getRelPathToPageImage() {
        if (imageResource != null) {
            imageSrc = getCurrentPage().getPath() + ".img.png";
            imageSrc = FrameworkContentExporterUtils.getPathToAsset(topLevelAppResource, imageSrc, appExport);
            
            return imageSrc;
        }

        return null;
    }
}