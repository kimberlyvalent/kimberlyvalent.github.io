var APP_DATA = {
  "scenes": [
    {
      "id": "0-temple-in-1",
      "name": "Temple In 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9017352181814218,
          "pitch": 0.007603261159047747,
          "rotation": 0,
          "target": "2-temple-in-2"
        },
        {
          "yaw": 2.958286468517393,
          "pitch": -0.0442355837660422,
          "rotation": 0,
          "target": "1-temple-front-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.69204532534439,
          "pitch": -0.02151261437285612,
          "title": "1. Buy the Offering การซื้อของไหว้",
          "text": "<div>Xiahai temple provides visitors with prepared offerings (sweets, god money, red thread) that you can buy if you don’t bring any. Meats are prohibited</div><div>คุณสามารถนำของไหว้มาเองได้ หรือสามารถมาซื้อได้ที่วัดในกรณีที่ไม่ได้เตรียมมา ของไหว้ที่ควรนำมาไหว้ส่วนมากจะเป็นขนม ของหวาน ของที่เกี่ยวกับความรัก ชอกโกแลต ห้ามถวายเนื้อสัตว์</div>"
        },
        {
          "yaw": 0.019846091091233475,
          "pitch": -0.3204780698575753,
          "title": "5. Introduce yourself to City God การไหว้เทพประจำเมือง<br>",
          "text": "Pray to the City God for blessing and happiness in family ไหว้เทพประจำเมืองเพื่อขอพรและให้ครอบครัวมีความสุข"
        },
        {
          "yaw": -0.6904085049315505,
          "pitch": -0.40982060973100687,
          "title": "6. Introduce yourself to Love God การไหว้เทพแห่งความรัก",
          "text": "Pray to the Love God will provide you the soulmate that you wished for ไหว้เทพแห่งความรัก บอกลักษณะคู่ครองที่อยากได้อย่างละเอียด นิสัย หน้าที่การงาน การเงิน ฐานะ รูปร่างหน้าตา อายุ"
        }
      ]
    },
    {
      "id": "1-temple-front-1",
      "name": "Temple Front 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.44852580472948134,
          "pitch": -0.08343734259576152,
          "rotation": 0,
          "target": "0-temple-in-1"
        },
        {
          "yaw": 2.2419191990682688,
          "pitch": 0.09033646628696346,
          "rotation": 0,
          "target": "5-temple-front-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.09343863222827764,
          "pitch": 0.4000950764096185,
          "title": "2. Put your Offering การวางของไหว้",
          "text": "<div>After you bought or brought your offerings, put it on the table in front of the temple</div><div>นำของไหว้ที่เตรียมมาหรือที่จัดซื้อกับทางวัด วางไว้ที่โต๊ะด้านหน้าวัดดังรูป</div>"
        },
        {
          "yaw": -3.1355910933604694,
          "pitch": -0.05313296133758527,
          "title": "4. Introduce yourself to Jade Emperor การไหว้เง็กเซียนฮ่องเต้",
          "text": "<div>Tell the Jade Emperor who you are, what's your purpose, to let Him know about you specifically</div><div>ยืนด้านหน้ากระถางธูป แนะนำตัวกับองค์เง็กเซียนฮ่องเต้ บอกจุดประสงค์ ขอพร อย่างละเอียดและชัดเจน</div>"
        },
        {
          "yaw": -3.133079802451137,
          "pitch": 0.1998725544577109,
          "title": "11. Make the amulet powerful การรับเครื่องราง",
          "text": "<div>Put the incent stick in the burner and circle the amulet (red thread) three times over the burner.</div><div>The purpose is to make the amulet stronger, more powerful, and more sacred.</div><div>นำธูปทั้ง 3 ดอกใส่ลงไปในกระถางธูป (เผาธูป) ไม่ปักลงในกระถางเหมือนประเทศไทย หลังจากนั้นนำเครื่องรางมาวน 3 รอบเหนือกระถางธูปเข้าหาตัว เพื่อทำให้เครื่องรางสัมผัสกับควันธูป เพื่อเพิ่มความศักดิ์สิทธิ์&nbsp;</div>"
        },
        {
          "yaw": 2.6728071815497945,
          "pitch": 0.09397806916846463,
          "title": "12. Burn the god money เผากระดาษเงิน-ทอง",
          "text": "The temple committees will burn the money for you เจ้าหน้าที่ของวัดจะนำกระดาษเงินกระดาษทองไปเผาให้คุณ (ห้ามเผาเอง)&nbsp;"
        }
      ]
    },
    {
      "id": "2-temple-in-2",
      "name": "Temple In 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5596179797442957,
          "pitch": 0.042540718548615075,
          "rotation": 0,
          "target": "3-temple-in-3"
        },
        {
          "yaw": 2.554502700519973,
          "pitch": 0.07590439078018285,
          "rotation": 0,
          "target": "0-temple-in-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.259112435639226,
          "pitch": -0.059674211218061046,
          "title": "7. Pray to the guard การไหว้เทพอารักษ์",
          "text": "Pray to avoid wickedness ไหว้เทพอารักษ์เพื่อให้พ้นจากสิ่งชั่วร้ายทั้งปวง"
        },
        {
          "yaw": 0.017635800242796762,
          "pitch": -0.40045145526653414,
          "title": "8. Pray to the Wife of the City God การไว้พระแม่เมือง&nbsp;",
          "text": "Pray to have blessings for married couples to have good relationship in family ไหว้พระแม่เมือง (องค์ฮองเฮาของเทพประจำเมือง) เพื่อขอให้คู่ครองอยู่กันอย่างราบรื่น มีความสัมพันธ์กันที่ดีในครอบครัว"
        }
      ]
    },
    {
      "id": "3-temple-in-3",
      "name": "Temple In 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0694589835948598,
        "pitch": -0.2882631772252715,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -3.041179387002945,
          "pitch": -0.022322890577711973,
          "rotation": 0,
          "target": "0-temple-in-1"
        },
        {
          "yaw": 2.7194711027094867,
          "pitch": 0.050472793257931414,
          "rotation": 0,
          "target": "4-temple-in-4"
        },
        {
          "yaw": -1.8099293755747023,
          "pitch": 0.0686399636259285,
          "rotation": 0,
          "target": "2-temple-in-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.05336056856349991,
          "pitch": -0.37390097736383865,
          "title": "9. Pray to the Buddha การไหว้พระพุทธเจ้า&nbsp;",
          "text": "Pray to have wisdom, peaceful mind, and good fortune ไหว้ขอพรเพื่อให้มีความฉลาดรอบรู้ มีความสุขใจ และมีโชคดี&nbsp;"
        }
      ]
    },
    {
      "id": "4-temple-in-4",
      "name": "Temple In 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9663975865991006,
        "pitch": 0.03707354888620351,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 2.3860297085347195,
          "pitch": 0.09302662009333673,
          "rotation": 0,
          "target": "3-temple-in-3"
        },
        {
          "yaw": -1.4769835492379677,
          "pitch": 0.15382278745149947,
          "rotation": 0,
          "target": "1-temple-front-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.884976903766696,
          "pitch": -0.03848637882140871,
          "title": "10. Take the god money รับกระดาษเงินกระดาษทอง",
          "text": "If you buy the offering, take the god money at the counter. This is the last offering that you need to give to the gods so that they will listen to your prayers. ถ้าคุณซื้อชุดไหว้ของทางวัด ไปรับกระดาษเงินกระดาษทองที่เคาเตอร์ นี่เป็นขั้นตอนสุดท้ายและเป็นของไว้สุดท้ายที่จะถวายองค์เทพเพื่อให้องค์เทพรับฟังคำของของคุณ<br>"
        }
      ]
    },
    {
      "id": "5-temple-front-2",
      "name": "Temple Front 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0439408638808843,
        "pitch": 0.16591469182813157,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 2.2371495423223164,
          "pitch": 0.08502213440652184,
          "rotation": 0,
          "target": "1-temple-front-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0727695436765936,
          "pitch": 0.08068036076731211,
          "title": "3. Get Incents หยิบธูป",
          "text": "<div>Take three incent sticks and light them to bring them to the big burner (Jade Emperor). After that, bring the incents along with you while praying inside the temple.</div><div>หยิบธูป 3 ดอก แล้วจุด หลังจากนั้นนำธูปไปยังหน้ากระถางธูปเพื่อไหว้องค์งกเซียนฮ่องเต้ หลังจากนั้น เราจะนำธูปติดตัวไปในวัดตลอดการไหว้ขอพร</div>"
        }
      ]
    }
  ],
  "name": "Xiahai Temple 360°",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
