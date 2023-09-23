package com.npc.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import ch.qos.logback.core.model.Model;

@Controller
public class HomeController {

  @RequestMapping("/photocatapp")
  public String photoCatApp(Model model) {
      return "photocatapp";
  }
}
