$(document).ready(function () {
    document.body.addEventListener('touchstart', function () { }, { passive: true });

    var nav = $('.g-nav');
    var baseurl = $("meta[property='og:baseurl']").attr('content');
    var lang = $("meta[property='og:lang']").attr('content');
    var logo = $('.g-logo');
    var themeStyle = $('.g-banner').attr('data-theme');
    logo.css({
        'background': 'url(' + baseurl + '/assets/icons/' + themeStyle + '.svg) no-repeat center',
        'background-size': '100% 100%'
    });

    /**
    * Cookie Tips
    */
    var cookieconsent_status = getCookie("cookieconsent_status");
    if (cookieconsent_status) {
        $('.cookie-tip').removeClass('active');
    } else {
        $('.cookie-tip').addClass('active');
    }
    $('#accept-tos').on('click', function () {
        setCookie("cookieconsent_status", "allow", 365);
        $('.cookie-tip').removeClass('active');
    });

    /**
     * Fix table for small screens
     */
    $("table").wrap("<div class='table-area'></div>");


    /**
     * Responsive Navigation
     */
    $('#menu-toggle').on('click', function (e) {
        var duration = 200;
        nav.slideToggle(duration);
        $(document).on('click', function () {
            nav.slideUp(duration);
        });
        e.stopPropagation();
    });

    nav.on('click', function (e) {
        e.stopPropagation();
    });

    $(".g-nav li.dropdown").on("click", function () {
        $(".g-nav li.dropdown").not($(this)).children("ul.dropdown-menu").removeClass("show");
        $(".g-nav li.dropdown").not($(this)).children("a.dropdown-toggle").removeClass("show");
        $(this).children("a.dropdown-toggle").toggleClass("show");
        $(this).children("ul.dropdown-menu").toggleClass("show");
    });
    $(document).on("click", function () {
        $(".g-nav li.dropdown").children("a.dropdown-toggle").removeClass("show");
        $(".g-nav li.dropdown").children("ul.dropdown-menu").removeClass("show");
    });

    /**
    *  Header Bar
    */
    if ($(window).width() > 695) {
        var header = $('.g-header');
        var headerHeight = header.outerHeight();
        var navText = nav.find('a');
        var scFlag = $(document).scrollTop();
        var logo = $('.g-logo');
        var themeStyle = $('.g-banner').attr('data-theme');

        $(document).scroll(function () {
            var scrollTop = $(this).scrollTop();
            var navClassName = 'nav-' + themeStyle;
            if (scrollTop > headerHeight) {
                if (scrollTop > 3 * headerHeight) {
                    header.addClass('headerUp');
                }
                header.css({
                    'background-color': 'rgba(255, 255, 255, .98)',
                    'box-shadow': '0 1px 12px rgba(0, 0, 0, .08)'
                });
                logo.css({
                    'background': 'url(' + baseurl + '/assets/icons/' + themeStyle + '.svg) no-repeat center',
                    'background-size': '100% 100%'
                });
                navText.addClass('color-f-gray');
                nav.addClass(navClassName);
            } else {
                header.removeClass('headerUp');
                // console.log("rm up");
                $('#bttb').removeClass("active");
                header.css({
                    'background-color': 'transparent',
                    'box-shadow': 'none'
                });
                logo.css({
                    'background': 'url(' + baseurl + '/assets/icons/' + themeStyle + '.svg) no-repeat center',
                    'background-size': '100% 100%'
                });
                navText.removeClass('color-f-gray');
                nav.removeClass(navClassName);
            }

            // scroll action
            if (scFlag > scrollTop) {
                header.addClass('headerDown');
                if (header.hasClass('headerUp')) {
                    $('#bttb').addClass("active");
                }
            } else {
                header.removeClass('headerDown');
                $('#bttb').removeClass("active");
            }
            scFlag = scrollTop;
        });
    } else {
        var header = $('.g-header');
        var headerHeight = header.outerHeight();
        var scFlag = $(document).scrollTop();
        $(document).scroll(function () {
            var scrollTop = $(this).scrollTop();

            if (scrollTop < 100) {
                $('#bttb').removeClass("active");
            }

            // scroll action
            if (scFlag > scrollTop && scFlag > 5) {
                $('#bttb').addClass("active");
            } else {
                $('#bttb').removeClass("active");
            }
            scFlag = scrollTop;
        });
    }

    /**
    * List for contents
    */
    function clickTOC() {
        $('.table-of-contents').toggleClass("active");
        $('#tools .tool.toc .b1').toggleClass("active");
        $('#tools .tool.toc .b2').toggleClass("active");
        $('.submenu').removeClass("active");
        $('#tools .tool.collection .b1').addClass("active");
        $('#tools .tool.collection .b2').removeClass("active");
    }
    function clickSubmenu() {
        $('.submenu').toggleClass("active");
        $('#tools .tool.collection .b1').toggleClass("active");
        $('#tools .tool.collection .b2').toggleClass("active");
        $('.table-of-contents').removeClass("active");
        $('#tools .tool.toc .b1').addClass("active");
        $('#tools .tool.toc .b2').removeClass("active");
    }
    $('#tools .tool.toc').bind('click', function () {
        clickTOC()
    });
    $('#tools .tool.collection').bind('click', function () {
        clickSubmenu()
    });
    $(".table-of-contents").on('click', function () {
        clickTOC()
    });
    $(".submenu").on('click', function () {
        clickSubmenu()
    });


    /**
    * Back To Top Button
    */
    $('.bttb').bind('click', function () {
        $('html,body').animate({ scrollTop: 0 }, function () {
            $('#bttb').removeClass("active");
        });
    });

    /**
    * Post Cover Resize
    */
    function postCover(img, container) {
        var imgWidth = img.width();
        var containerWidth = container.width();
        var imgHeight = img.height();
        var containerHeight = container.height();

        if (imgHeight < containerHeight) {
            img.css({
                'width': 'auto',
                'height': '100%'
            });
            imgWidth = img.width();
            containerWidth = container.width();
            var marginLeft = (imgWidth - containerWidth) / 2;
            img.css('margin-left', '-' + marginLeft + 'px');
        } else {
            var marginTop = (containerHeight - imgHeight) / 2;
            img.css('margin-top', marginTop + 'px');
        }

        img.fadeIn();
    }

    /**
     * The Post Navigator
     */
    $('.read-next-item section').each(function () {
        var n = $(this).height();
        var rn = $('.read-next-item').height();
        $(this).css('margin-top', (rn - n) / 2 + 'px');
        $(this).fadeIn();
    });

    $('.read-next-item img').each(function () {
        postCover($(this), $('.read-next-item'));
        // $(this).addClass("lazyload");
        $(this).attr('data-src', $(this).attr('src')).removeAttr('src').addClass("lazyload");
    });

    /**
     * Pagination
     */
    function pagination() {
        var total = parseInt($('#total_pages').val());
        var current = parseInt($('#current_pages').val());
        var baseUrl = $('#base_url').val();
        var limit = 3;

        var link_html = '';

        for (var i = current - limit; i < current; i++) {
            if (i > 0 && i !== 1) {
                link_html += '<a href="' + baseUrl + 'page' + i + '/index.html" class="page-link page-num">' + i + '</a>';
            } else if (i === 1) {
                link_html += '<a href="' + baseUrl + '" class="page-link page-num">' + i + '</a>';
            }
        }

        link_html += '<span class="page-link page-num active">' + current + '</span>';

        for (var j = current + 1; j <= current + limit; j++) {
            if (j <= total) {
                link_html += '<a href="' + baseUrl + 'page' + j + '/index.html" class="page-link page-num">' + j + '</a>';
            }
        }

        $('#page-link-container').html(link_html);
    }
    pagination();

    /**
     * Search
     */
    function Search() {
        var self = this;
        var input = $('#search_input');
        var result = $('.search_result');

        input.focus(function () {
            $('.icon-search').css('color', '#3199DB');
            result.show();
        });

        input.keyup(debounce(this.autoComplete));

        $(document).click(function (e) {
            if (e.target.id === 'search_input' || e.target.className === 'search_result' || e.target.className === 'search_item') {
                return;
            }
            $('.icon-search').css('color', '#CAD3DC');
            result.hide();
        });
    }

    Search.prototype.autoComplete = function () {
        var keywords = this.value.toLowerCase();

        if (keywords.length) {
            $('.icon-search').css('color', '#3199DB');
        } else {
            $('.icon-search').css('color', '#CAD3DC');
        }

        var jsonfile = baseurl + '/assets/search.json';
        $.getJSON(jsonfile).done(function (data) {
            var html = '';
            for (var i in data) {
                var item = data[i];
                var title = item.title;
                var tags = item.tags;
                var url = item.url;

                var k = title + tags;
                if (keywords !== '' && k.toLowerCase().indexOf(keywords) >= 0) {
                    html += '<a class="search_item" href="' + item.url + '">' + item.title + '</a>';
                }
            }
            $('.search_result').html(html);
        });
    };

    function debounce(fn, delay) {
        var timer;
        delay = delay || 120;

        return function () {
            var ctx = this;
            var args = arguments;
            var later = function () {
                fn.apply(ctx, args);
            };
            clearTimeout(timer);
            timer = setTimeout(later, delay);
        };
    }

    new Search();

    /**
     * Night mode
     */
    function nightMode() {
        var el = $('body');
        var className = 'night-mode';

        var date = new Date();
        var hour = date.getHours();

        var mode = getCookie("mode");
        if (mode == "") {
            // console.log(mode);
            if (hour <= 6 || hour >= 18) {
                // console.log("Start night mode");
                setCookie("mode", "night", 1)
            }
            // el.addClass(className);
        }
    }

    if ($('#nm-switch').val() === 'true') {
        nightMode();
    }

    /**
     * Copy and copyright
     */
    function setClipboardData(str) {
        str += '\n\n著作权归作者所有。\n商业转载请联系作者获得授权,非商业转载请注明出处。\n原文: ' + location.href;
        $('.post-content').on('copy', function (e) {
            var data = window.clipboardData || e.originalEvent.clipboardData;
            data.setData('text/plain', str);
            e.preventDefault();
        });
    }
    $('.post-content').on('mouseup', function (e) {
        var txt = window.getSelection();
        if (txt.toString().length >= 30) {
            setClipboardData(txt);
        }
    });

    /**
    * TOC highlight with the corresponding content
    */
    function locateCatelogList() {
        /*获取文章目录集合,可通过：header过滤器*/
        var alis = $('article :header');
        /*获取侧边栏目录列表集合**/
        var sidebar_alis = $('.table-of-contents a').parent();
        /*获取滚动条到顶部的距离*/
        var scroll_height = $(window).scrollTop();
        if (scroll_height > 0) {
            $('.g-header').addClass('headerUp');
        }
        for (var i = 0; i < alis.length; i++) {
            /*获取锚点集合中的元素分别到顶点的距离*/
            var a_height = $(alis[i]).offset().top - 100;
            if (a_height < scroll_height) {
                /*高亮显示*/
                $(sidebar_alis).removeClass('active');
                $(sidebar_alis[i]).addClass('active');
                a_height = $(".toc-body li.active").offset().top - $(".toc-header h2").offset().top
                var t_height = $(".toc-body li.active").offset().top - $(".toc-body li:first-child").offset().top
                if (a_height < 22) {
                    $(".toc-body").scrollTop(t_height - 350);
                }
                if (a_height > 350) {
                    $(".toc-body").scrollTop(t_height - 72);
                }
            }
        }
    }
    if ($(".toc-body").length > 0) {
        $($('.table-of-contents a').parent()[0]).addClass('active');
        locateCatelogList();
        $(window).bind('scroll', locateCatelogList);
    }

    /**
    * Day/Night mode switch button
    */
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        if (!baseurl) {
            document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
        } else {
            document.cookie = cname + "=" + cvalue + "; path=" + baseurl + "; " + expires;
        }
    }

    var mode = getCookie("mode");
    // console.log(mode);
    if (mode == "night") {
        $(".g-nav li.mode .night").addClass("active");
        $("#mode-toggle .icon-night").addClass("active");
        $("body").addClass("night-mode");
        $(".icon.up.night").toggleClass("active");
        $(".icon.list.night").toggleClass("active");
    } else {
        $(".g-nav li.mode .day").addClass("active");
        $("#mode-toggle .icon-day").addClass("active");
        $("body").removeClass("night-mode");
        $(".icon.up.day").toggleClass("active");
        $(".icon.list.day").toggleClass("active");
    }

    function changeMode() {
        var mode = getCookie("mode");
        if (mode == "") {
            setCookie("mode", "night", 1)
            $("body").addClass("night-mode");
        } else if (mode == "day") {
            setCookie("mode", "night", 1)
            $("body").addClass("night-mode");
        } else {
            setCookie("mode", "day", 1)
            $("body").removeClass("night-mode");
        }
        // console.log(mode + "-->" + getCookie("mode"));
        if ($("#disqus_thread").length > 0) {
            DISQUS.reset({
                reload: true
            });
        }
        if ($(".giscus").length > 0) {
            changeGiscusTheme();
        }
        $(".g-nav li.mode .icon").toggleClass("active");
        $("#mode-toggle .icon").toggleClass("active");
        $(".icon.up.day").toggleClass("active");
        $(".icon.up.night").toggleClass("active");
        if ($('.table-of-contents').css('visibility') == "visible") {
            $(".icon.exit.day").toggleClass("active");
            $(".icon.exit.night").toggleClass("active");
        } else {
            $(".icon.list.day").toggleClass("active");
            $(".icon.list.night").toggleClass("active");
        }
    }

    $(".g-nav li.mode").click(function () {
        changeMode();
    });

    $("#mode-toggle").click(function () {
        changeMode();
    });

    /**
    *  Copy code blocks
    */
    // get all <code> elements
    var allCodeBlocksElements = $("pre");
    allCodeBlocksElements.each(function (i) {
        // add different id for each code block
        // target
        var currentId = "codeblock" + (i + 1);
        $(this).attr('id', currentId);
        var lang = $(this).attr("class").split(" ")[1].substring(9).toUpperCase();

        if (lang == "ERS") {
            lang = $(this).attr("class").split(" ")[0].substring(9).toUpperCase();
            if (lang == "MERMAID2") {
                text = $(this).text();
                $(this).before('<summary class="render-expand" aria-haspopup="dialog" role="button"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon" style="display:inline-block;vertical-align:text-bottom"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 1.06L2.56 7h10.88l-2.22-2.22a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H2.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5z"></path></svg></summary>');
                $(this).after('<div class="mermaid2">' + text + '</div>');
            } else {
                $(this).wrap('<div class="highlight"></div>');
                $(this).parent().wrap('<div class="' + $(this).attr("class").split(" ")[0] + ' highlighter-rouge"></div>');
                $(this).addClass("highlight");
                //trigger
                var clipButton = '<div class="copy-container"><span class="lang">' + lang + '</span><button class="btn" data-bs-original-title="Copy" aria-label="Copy" data-clipboard-target="#' + currentId + '"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-copy"></use></svg><span class="tooltip unfinish">Copy</span><span class="tooltip finish">Copied</span></button></div>';
                $(this).before(clipButton);
            }
        } else {
            //trigger
            var clipButton = '<div class="copy-container"><span class="lang">' + lang + '</span><button class="btn" data-bs-original-title="Copy" aria-label="Copy" data-clipboard-target="#' + currentId + '"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-copy"></use></svg><span class="tooltip unfinish">Copy</span><span class="tooltip finish">Copied</span></button></div>';
            $(this).before(clipButton);
        }
    });

    var clipboard = new ClipboardJS('.btn');
    clipboard.on('success', function (e) {
        e.clearSelection();
    });

    $(".markdown-body .btn").hover(function () {
        $(this).find(".tooltip.unfinish").addClass("active");
    }, function () {
        $(this).find(".tooltip.unfinish").removeClass("active");
    });

    $(".markdown-body .btn").click(function () {
        $(this).find(".tooltip.unfinish").removeClass("active");
        var finish = $(this).find(".tooltip.finish")
        finish.addClass("active");
        setTimeout(function () {
            finish.removeClass("active");
        }, 500);
    });

    /**
    * Expand the mermaid figure
    */
    $("summary").click(function (event) {
        var text = $(this).next().children().text();
        $(".modal .modal-content .container").html('<div class="mermaid2">' + text + '</div>')
        mermaid.init(undefined, $('.modal .modal-content .mermaid2'));
        $('.modal').css("visibility", "visible");
        $(".modal .modal-content").click(function (event) {
            if (event.target.classList.contains("close")) {
                $(".modal").css("visibility", "hidden");
            }
            event.stopPropagation();
        });
        event.stopPropagation();
    });

    $(document).click(function () {
        $(".modal").css("visibility", "hidden");
    });

    /**
    *  Error image loading
    */
    document.addEventListener('error', function (e) {
        if (e.target.nodeName == 'IMG') { e.target.src = baseurl + '/assets/img/placeholder.webp'; }
    }, true);

    /**
     * Alive time
     */

    var alivetime_days = $(".alivetime_days")
    var alivetime_hours = $(".alivetime_hours")
    var alivetime_minutes = $(".alivetime_minutes")
    var alivetime_seconds = $(".alivetime_seconds")
    function alive_time() {
        var alivestart = $("meta[name='alivestart']").attr('content');
        window.setTimeout(alive_time, 1000);
        // Start at
        BirthDay = new Date(alivestart);
        // Now at
        today = new Date();
        timeold = (today.getTime() - BirthDay.getTime());
        secondsold = Math.floor(timeold / 1000);
        e_daysold = timeold / (24 * 60 * 60 * 1000);
        daysold = Math.floor(e_daysold);
        e_hrsold = (e_daysold - daysold) * 24;
        hrsold = Math.floor(e_hrsold);
        e_minsold = (e_hrsold - hrsold) * 60;
        minsold = Math.floor(e_minsold)
        seconds = Math.floor((e_minsold - minsold) * 60);
        alivetime_days.html(daysold)
        alivetime_hours.html(hrsold)
        alivetime_minutes.html(minsold)
        alivetime_seconds.html(seconds)
        // alivetime.html(daysold + " 天 " + hrsold + " 小时 " + minsold + " 分 " + seconds + " 秒");
    }
    alive_time();

    /**
    * Calendar plugin
    **/
    var calendarScale = $("meta[property='calendar-scale']").attr('content');
    var calendarScheme = $("meta[property='calendar-scheme']").attr('content');
    var calendarColor = $("meta[property='calendar-color']").attr('content');
    var cal_color = { 'type': 'threshold', 'domain': [4, 6, 8] };
    var d3Colors = ['blues', 'greens', 'greys', 'oranges', 'purples', 'reds', 'bugn', 'bupu', 'gnbu', 'orrd', 'pubu', 'pubugn', 'purd', 'rdpu', 'ylgn', 'ylgnbu', 'ylorbr', 'ylorrd', 'cividis', 'inferno', 'magma', 'plasma', 'viridis', 'cubehelix', 'turbo', 'warm', 'cool', 'brbg', 'prgn', 'piyg', 'puor', 'rdbu', 'rdgy', 'rdylbu', 'rdylgn', 'spectral', 'burd', 'buylrd', 'rainbow', 'sinebow']
    if (calendarScheme !== "null") {
        if (d3Colors.includes(calendarScheme)) {
            cal_color.scheme = calendarScheme
        } else {
            cal_color.range = ['#9be9a8', '#40c463', '#30a14e', '#216e39']
            console.log("'" + calendarScheme + "' is not supported. Please check it in https://cal-heatmap.com/!")
        }
    } else if (calendarColor !== "null") {
        cal_color.range = calendarColor
    } else {
        cal_color.range = ['#9be9a8', '#40c463', '#30a14e', '#216e39']
    }
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth() + 1;
    day = today.getDate();
    endDay = year + '-' + ("0" + month).slice(-2) + '-' + ("0" + day).slice(-2);
    locales = { "zh-Hans": "zh", "zh-Hant": "zh-tw", "en": "en", "ja": "ja" };

    axios.get(baseurl + "/stats.json").then(res => {
        stats_data = res.data;
        if ($("#cal-heatmap").length > 0) {
            var cal = new CalHeatmap();
            selectors = {
                'cal': '#cal-heatmap',
                'legend': '#ex-ghDay-legend',
                'prev': '#ex-ghDay-prev',
                'next': '#ex-ghDay-next',
                'today': '#ex-ghDay-today',
            }
            cal = makeCalendar(cal, selectors, calendarScale);
        }
        if ($("#archive-heatmap").length > 0) {
            var cal2 = new CalHeatmap();
            selectors2 = {
                'cal': '#archive-heatmap',
                'legend': '#ex-ghDay-legend2',
                'prev': '#ex-ghDay-prev2',
                'next': '#ex-ghDay-next2',
                'today': '#ex-ghDay-today2',
            }
            cal2 = makeCalendar(cal2, selectors2, "day", "True")
        }
    }).catch(function (error) {
        console.log("'stats.json' is not found. Calendar will be abnormal. Please make sure it exits.");
    });


    function makeCalendar(cal, selectors, by, archive = "False") {
        var paras = {}
        var options = [[
            Tooltip,
            {
                text: function (date, value, dayjsDate) {
                    if (value == 1) {
                        return value + ' contribution on ' + dayjsDate.format(paras.format);
                    }
                    return (
                        (value ? value + ' contributions' : 'No contribution') + ' on ' + dayjsDate.format(paras.format)
                    );
                },
            },
        ], [
            LegendLite,
            {
                includeBlank: true,
                itemSelector: selectors.legend,
                radius: 3,
                width: 10,
                height: 10,
                gutter: 2,
            },
        ]]
        if (by == "month") {
            const xMonth = function (DateHelper) {
                return {
                    name: 'xMonth',
                    allowedDomainType: ["year"],
                    rowsCount: () => 3,
                    columnsCount: () => 4,
                    mapping: (startTimestamp, endTimestamp) => DateHelper.intervals(
                        'month',
                        startTimestamp,
                        DateHelper.date(endTimestamp)
                    ).map((ts) => ({
                        t: ts,
                        x: DateHelper.date(ts).month() % 4,
                        y: parseInt(DateHelper.date(ts).month() / 4),
                    })),
                    extractUnit: (ts) => DateHelper.date(ts).startOf('month').valueOf(),
                };
            };
            cal.addTemplates(xMonth);
            var paras = {
                'format': 'YYYY-MM',
                'domain': {
                    'type': 'year',
                    'gutter': 5,
                    'label': { 'text': (ts) => dayjs(ts).format("YYYY"), 'align': 'middle' }
                },
                'subDomain': { 'type': 'xMonth', 'width': 60, 'height': 36, 'gutter': 5, 'radius': 3 },
                'range': 1,
            };
            var start_date = new Date(dayjs(endDay).startOf('year').add(1, 'month'))
        } else if (by == "year") {
            const xYear = function (DateHelper) {
                return {
                    name: 'xYear',
                    allowedDomainType: ["year"],
                    rowsCount: () => 1,
                    columnsCount: () => 1,
                    mapping: (startTimestamp, endTimestamp) => DateHelper.intervals(
                        'year',
                        startTimestamp,
                        DateHelper.date(endTimestamp)
                    ).map((ts, index) => ({
                        t: ts,
                        x: index,
                        y: 0,
                    })),
                    extractUnit: (ts) => DateHelper.date(ts).startOf('year').valueOf(),
                };
            };
            cal.addTemplates(xYear);
            var paras = {
                'format': 'YYYY',
                'domain': { 'type': 'year', 'gutter': 5, 'label': { 'text': 'YYYY', 'align': 'middle' } },
                'subDomain': { 'type': 'xYear', 'width': 36, 'height': 36, 'gutter': 5, 'radius': 3 },
                'range': 6,
            };
            if (archive == "False") {
                paras.range = parseInt($("#cal-heatmap").width() / 40)
            }
            var start_date = new Date(dayjs(endDay).subtract(paras.range - 1, 'year'))
        } else {
            var paras = {
                'format': 'YYYY-MM-DD',
                'domain': { 'type': 'month', 'gutter': 5, 'label': { 'text': 'MMM', 'align': 'start' } },
                'subDomain': { 'type': 'ghDay', 'width': 13, 'height': 13, 'gutter': 5, 'radius': 3 },
                'range': 3,
            };
            var start_date = new Date(dayjs(endDay).subtract(paras.range - 1, 'month'))
            options[2] = [
                CalendarLabel,
                {
                    width: 30,
                    textAlign: 'start',
                    text: () => dayjs.weekdaysShort().map((d, i) => (i % 2 == 0 ? '' : d)),
                    padding: [25, 0, 0, 0],
                },
            ];
        }
        if (archive == "True") {
            postWidth = $(".post-content").width()
            if (postWidth >= 633) {
                paras.range = 12
            } else if (postWidth >= 400) {
                paras.range = 8
            } else if (postWidth >= 300) {
                paras.range = 6
            } else {
                paras.range = 3
            }
            paras.domain.gutter = 2
            paras.subDomain.width = 9
            paras.subDomain.height = 9
            paras.subDomain.gutter = 2
            paras.subDomain.radius = 2
            start_date = new Date(dayjs(endDay).subtract(paras.range - 1, 'month'))
        }
        if (by == "month") {
            var source_data = stats_data.calendar.by_month
        } else if (by == "year") {
            var source_data = stats_data.calendar.by_year
        } else {
            var source_data = stats_data.calendar.by_day
        }
        cal.paint(
            {
                itemSelector: selectors.cal,
                domain: {
                    type: paras.domain.type,
                    gutter: paras.domain.gutter,
                    label: {
                        text: paras.domain.label.text,
                        textAlign: paras.domain.label.align,
                        position: 'top'
                    }
                },
                subDomain: {
                    type: paras.subDomain.type,
                    gutter: paras.subDomain.gutter,
                    width: paras.subDomain.width,
                    height: paras.subDomain.height,
                    radius: paras.subDomain.radius,
                    label: null
                },
                date: {
                    start: start_date,
                    max: new Date(endDay),
                    highlight: [new Date(endDay)],
                    locale: locales[lang]
                },
                range: paras.range,
                data: { source: source_data, x: 'date', y: 'count' },
                scale: { color: cal_color }
            },
            options
        );
        $(selectors.prev).on('click', function (e) {
            e.preventDefault();
            cal.previous();
        });
        $(selectors.next).on('click', function (e) {
            e.preventDefault();
            cal.next();
        });
        $(selectors.today).on('click', function (e) {
            e.preventDefault();
            cal.jumpTo(new Date(endDay));
        });
        return cal;
    }

    /**
    * Random post plugin 
    ***/
    const rssUrl = baseurl + '/rss.xml'
    let posts = []
    axios.get(rssUrl).then(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");
        const items = xmlDoc.getElementsByTagName("item")
        for (let i = 0; i < items.length; i++) {
            const link = items[i].getElementsByTagName("link")[0].textContent;
            posts.push(link);
        }
    }).catch(error => {
        console.error("Error fetching RSS feed:", error)
    })

    $(".random a, #random-toggle a").on("click", function (e) {
        e.preventDefault();
        if (posts.length > 0) {
            const randomIndex = Math.floor(Math.random() * posts.length);
            const randomPostUrl = posts[randomIndex];
            window.location.href = randomPostUrl;
        } else {
            console.log("No available post!!! Please add at least one post firstly.")
        }

    })

    const currentYear = new Date().getFullYear();
    const footerSince = $("#footer-since").val();
    const footerYearElement = $("#footer-year");
    if (footerSince && footerSince != currentYear) {
        footerYearElement.text(`${footerSince} - ${currentYear}`);
    } else {
        footerYearElement.text(currentYear);
    }
});
