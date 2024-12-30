package com.fmoraes;

import io.quarkiverse.renarde.htmx.HxController;
import io.quarkus.qute.CheckedTemplate;
import io.quarkus.qute.TemplateInstance;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;

@Path("/")
public class Index extends HxController {

    @CheckedTemplate
    public static class Templates {
        public static native TemplateInstance index();
        public static native TemplateInstance fragments$table(String sortDirection);
        public static native TemplateInstance fragments$table2();
    }

    @Path("/")
    @GET
    public TemplateInstance index(@QueryParam("sortDirection") String direction) {
        System.out.println(direction);
        if (direction != null) {
            return Templates.fragments$table(direction);
        }
        return Templates.index();
    }

    @Path("/table")
    @GET
    public TemplateInstance table2() {

        return Templates.fragments$table2();
    }
}
