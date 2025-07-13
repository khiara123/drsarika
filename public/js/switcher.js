//switcher
/////////////////////////////////////////////
//DELETE FOLLOWING CODE TO DISABLE SWITCHER//
/////////////////////////////////////////////


var cookieClass = {
  deleteAllCookies: function () {
    if (jQuery.cookie) {
      jQuery.each(jQuery.cookie(), function (key, value) {
        jQuery.removeCookie(key);
        location.reload();
      });
    } else {
      return false;
    }
  },
  deleteCookie: function (cookieName) {
    if (jQuery.cookie) {
      jQuery.removeCookie(cookieName);
    } else {
      return false;
    }
  },
  setCookieValue: function (cookieName, cookieValue) {
    if (jQuery.cookie) {
      jQuery.cookie(cookieName, cookieValue);
    } else {
      return false;
    }
  },
  getCookieValue: function (cookieName) {
    if (jQuery.cookie) {
      return jQuery.cookie(cookieName);
    } else {
      return false;
    }
  },
  toggleTrueOrFalseCookie: function (cookieName) {
    if (jQuery.cookie) {
      if (!jQuery.cookie(cookieName) || jQuery.cookie(cookieName) == "0") {
        jQuery.cookie(cookieName, "1");
        return true;
      } else {
        jQuery.cookie(cookieName, "0");
        return true;
      }
    } else {
      return false;
    }
  },
  returnTrueOrFalseCookie: function (cookieName) {
    if (jQuery.cookie) {
      cookieName = jQuery.cookie(cookieName);
      switch (cookieName) {
        case "0":
          return false;
          break;
        case 0:
          return false;
          break;
        case false:
          return false;
          break;
        case undefined:
          return false;
          break;
        case null:
          return false;
          break;
        default:
          return true;
          break;
      }
    } else {
      return false;
    }
  },
  setCookieToFalse: function (cookieName) {
    if (jQuery.cookie) {
      jQuery.cookie(cookieName, "0");
    } else {
      return false;
    }
  },
};

var switcherClass = {
  switchBoxedWide: function (e) {
    //wide boxed changing
    jQuery("#boxed_margin")
      .toggleClass("hidden")
      .find("input")
      .prop("checked", false);
    jQuery(".for-toggle").toggleClass("hidden");
    jQuery("#canvas")
      .toggleClass("boxed")
      .removeClass(patternClasses.join(" "));
    jQuery("#box_wrapper")
      .toggleClass("container")
      .removeClass("top-bottom-margins");
    jQuery(".page_header_wrapper").attr("style", "");
    if (jQuery().isotope) {
      var $isotopeContainers = jQuery(
        '"#isotopeContainer, .isotope_container"'
      );
      if ($isotopeContainers.length) {
        jQuery("#isotopeContainer, .isotope_container").isotope("reLayout");
      }
    }
    jQuery(window).trigger("resize");
    cookieClass.toggleTrueOrFalseCookie("boxed");
    cookieClass.setCookieToFalse("topBottomMargins");
    cookieClass.setCookieToFalse("pattern");
  },
  switchBoxedMargins: function (e) {
    if (jQuery("#layout").prop("checked")) {
      jQuery("#box_wrapper").toggleClass("top-bottom-margins");
      cookieClass.toggleTrueOrFalseCookie("topBottomMargins");
    }
  },
  switchPatterns: function (e, newPattern) {
    e.preventDefault();
    e.stopPropagation();
    jQuery("#canvas").removeClass(e.data.patterns.join(" "));
    jQuery("#canvas").addClass(newPattern);
    cookieClass.setCookieValue("pattern", newPattern);
  },

  switchColorScheme: function (e) {
    e.preventDefault();
    e.stopPropagation();
    var color = jQuery(this).data("color");
    jQuery(".color-switcher-link").each(function () {
      var $thisLink = jQuery(this);
      var newHref = $thisLink
        .attr("href")
        .replace(/[1-9]*(\.css)/, color + ".css");
      $thisLink.attr("href", newHref);
    });
    cookieClass.setCookieValue("colorScheme", color);
  },

  switchDarkLight: function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (jQuery(this).parent().hasClass("active")) {
      return;
    }
    jQuery("#switcher-version").find("li").toggleClass("active");

    jQuery("#box_wrapper > *").each(function () {
      //sections to ignore light-dark switch
      var $thisSection = jQuery(this);
      if (
        $thisSection.hasClass("page_header_side") ||
        $thisSection.hasClass("page_topline") ||
        $thisSection.hasClass("page_footer") ||
        $thisSection.hasClass("page_subscribe") ||
        $thisSection.hasClass("page_partners_carousel") ||
        $thisSection.hasClass("page_breadcrumbs") ||
        $thisSection.hasClass("page_copyright") ||
        $thisSection.hasClass("intro_section") ||
        $thisSection.hasClass("gradient") ||
        $thisSection.hasClass("cs") ||
        $thisSection.attr("id") == "featured"
      ) {
        return;
      }

      if ($thisSection.hasClass("ls")) {
        $thisSection.toggleClass("ls ds");
      } else if ($thisSection.hasClass("ds")) {
        $thisSection.toggleClass("ds ls");
      }
    });
    jQuery(".page_header, .page_header_wrapper").each(function () {
      //sections to ignore light-dark switch
      var $thisHeader = jQuery(this);
      if (
        //for dashboard
        $thisHeader.hasClass("header_darkblue")
      ) {
        return;
      }
      if ($thisHeader.hasClass("header_white")) {
        $thisHeader.toggleClass("header_white header_darkgrey");
      } else if ($thisHeader.hasClass("header_darkgrey")) {
        $thisHeader.toggleClass("header_white header_darkgrey");
      }
    });

    cookieClass.toggleTrueOrFalseCookie("dark");
  },
};
