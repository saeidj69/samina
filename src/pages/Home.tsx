import React from "react";
import MainLayout from "../components/layout/panelLayout";
import { useTranslation } from 'react-i18next';
export const Home = () => {
    const { t } = useTranslation()
  return (
    <MainLayout>
      <div>{t('about')}</div>
    </MainLayout>
  );
};
