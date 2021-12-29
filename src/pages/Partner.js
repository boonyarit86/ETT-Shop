import React from "react";
import styled from "styled-components";
import TablePartner from "./components/TablePartner";

function Partner() {
  let partners = [
    {
      companyName: " บริษัท อีเล็คทรอนิคส์ซอร์ซ จำกัด",
      linkAdress: "https://www.es.co.th/index.asp",
      phone: ["02-623-8364-6"],
      fax: ["0 - 2225 - 6986"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "บริษัท สหรุ่งโรจน์ (ประเทศไทย) จำกัด",
      linkAdress: "",
      phone: ["02-225-7070-5"],
      fax: ["02-225-2979"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "หจก. ไทยอีเล็คทรอนิคส์ จำกัด",
      linkAdress: "",
      phone: ["02-222-7062"],
      fax: ["02-221-0595"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "ห้างหุ้นส่วนจำกัด พิสิฐกลการ ",
      linkAdress: "",
      phone: ["02-222-7463", "02-221-8674"],
      fax: ["02-224-8717"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "หจก.ส.จริยะพานิชย",
      linkAdress: "",
      phone: ["02-876-6031-2"],
      fax: ["02-876-6031"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "หจก.คล่องดี อีเล็คทรอนิคส์ ",
      linkAdress: "",
      phone: ["02-221-1421"],
      fax: ["02-222-5518"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "บริษัท ทิพย์เทคนิค (1992) จำกัด  ",
      linkAdress: "",
      phone: ["02-883-2808-9"],
      fax: [" 02-883-2810"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "บริษัท ณัฐพงษ์เซลส์แอนด์เซอร์วิส จำกัด (สำนักงานใหญ่)",
      linkAdress: "",
      phone: ["02-225-0094", "02-623-8899"],
      fax: [" 02-226-4020"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName:
        "บริษัท ณัฐพงษ์เซลส์แอนด์เซอร์วิส จำกัด (เซียร์ รังสิต ชั้น G)",
      linkAdress: "",
      phone: ["02-992-7379"],
      fax: ["02-992-7380"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "หจก. เอเชียสากล",
      linkAdress: "",
      phone: ["02-221-2500"],
      fax: ["02-225-6410"],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "บริษัท กราวิเทคไทย (ไทยแลนด์) จำกัด",
      linkAdress: "https://www.gravitechthai.com/",
      phone: ["02-115-3745", "088-886-3400"],
      fax: [""],
      country: "ไทย",
      province: "กรุงเทพ",
    },
    {
      companyName: "บริษัท กิตติอีเล็คทรอนิคส์ จำกัด",
      linkAdress: "",
      phone: ["05-322-1463"],
      fax: ["05-321-5221"],
      country: "ไทย",
      province: "เชียงใหม่",
    },
    {
      companyName: "ร้านไพศาลอีเล็คทรอนิคส์",
      linkAdress: "",
      phone: ["05-432-3911-911/922"],
      fax: ["05-432-3922"],
      country: "ไทย",
      province: "ลำปาง",
    },
    {
      companyName: "ร้านดาเทรดเซ็นเตอร์",
      linkAdress: "",
      phone: ["05-551-2271"],
      fax: ["05-551-2271"],
      country: "ไทย",
      province: "ตาก",
    },
    {
      companyName: "ร้าน 131 ทราฟฟิค คอนโทรล จำกัด",
      linkAdress: "",
      phone: ["07-622-1386"],
      fax: ["07-622-1387"],
      country: "ไทย",
      province: "ภูเก็ต",
    },
    {
      companyName: "ร้านคิงส์อีเล็คทรอนิคส์",
      linkAdress: "",
      phone: ["04-324-3848"],
      fax: ["04-323-9203"],
      country: "ไทย",
      province: "ขอนแก่น",
    },
    {
      companyName: "ร้านนวลแขอีเล็คทรอนิคส์",
      linkAdress: "",
      phone: ["04-451-3010"],
      fax: ["04-451-3010"],
      country: "ไทย",
      province: "สุรินทร์",
    },
    {
      companyName: "ร้าน เอวี อีเล็คทรอนิคส์",
      linkAdress: "",
      phone: ["03-451-2506"],
      fax: ["03-451-4834"],
      country: "ไทย",
      province: "กาญจนบุรี",
    },
    {
      companyName: "บริษัท เบสท์เทอร์โม จำกัด",
      linkAdress: "",
      phone: ["07-423-8775"],
      fax: ["07-442-8171"],
      country: "ไทย",
      province: "สงขลา",
    },
  ];

  return (
    <Container>
      <Content>
        <TablePartner title="ตัวแทนจำหน่าย" partners={partners} />
      </Content>
    </Container>
  );
}

export default Partner;

const Container = styled.div`
  margin: 80px auto;
  max-width: 1128px;
  padding: 10px;
`;

const Content = styled.div`
  margin-top: 10px;
  width: 100%;
`;
