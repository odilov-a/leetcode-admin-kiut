import { AppstoreOutlined, TranslationOutlined } from "@ant-design/icons";

interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
  route?: string;
}

const formatStatus = (id: any) => {
  if (id == 0) {
    return "Yaratilgan";
  } else if (id == 1) {
    return "To'langan";
  } else if (id == 2) {
    return "Yig'ilgan";
  } else if (id == 3) {
    return "Yetkazilmoqda";
  } else if (id == -9) {
    return "Yaratilgan (Bekor qilingan)";
  } else if (id == -1) {
    return "To'langan (Bekor qilingan)";
  } else if (id == -2) {
    return "Yig'ilgan (Bekor qilingan)";
  } else if (id == -3) {
    return "Yetkazilmoqda (Bekor qilingan)";
  } else {
    return "Yetkazildi";
  }
};

const menuItems: MenuItem[] = [
  {
    key: "difficulties",
    label: "Qiyinliklar",
    icon: <AppstoreOutlined />,
    route: "/difficulties",
  },
  {
    key: "subjects",
    label: "Fanlar",
    icon: <AppstoreOutlined />,
    route: "/subjects",
  },
  {
    key: "students",
    label: "O'quvchilar",
    icon: <AppstoreOutlined />,
    route: "/students",
  },
  {
    key: "teachers",
    label: "O'qituvchilar",
    icon: <AppstoreOutlined />,
    route: "/teachers",
  },
  {
    key: "problems",
    label: "Masalalar",
    icon: <AppstoreOutlined />,
    route: "/problems",
  },
  {
    key: "translations",
    label: "Tarjimalar",
    icon: <TranslationOutlined />,
    route: "/translations",
  },
];

function gen4() {
  return Math.random()
    .toString(16)
    .slice(-4);
}

export default {
  menuItems,
  formatStatus,
};

export { gen4 };
