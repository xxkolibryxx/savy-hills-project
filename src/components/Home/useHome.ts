import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dbData from '../../db/data.json';
import { selectLanguage } from 'redux/language/selectors';
import { setLanguage } from 'redux/language/languageSlice';

interface IUseHome {
  data: any[];
  changeLanguage: changeLanguageType;
  lang: string;
  handlePageChange: (selectedPage: number) => void;
}

interface IData {
  name: string;
  review: string;
  date: string;
}
type LanguageData = Record<string, Record<string, IData>>;

type UseHomeType = () => IUseHome;
type changeLanguageType = (language: string) => void;

const useHome: UseHomeType = () => {
  const lang = useSelector(selectLanguage);
  const parsedDataByType: LanguageData = dbData;
  const [data, setData] = useState<IData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (selectedPage: number): void => {
    setCurrentPage(selectedPage);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const temporaryData = Array.from(Object.values(parsedDataByType[lang]));
    setData(temporaryData);
  }, [lang]);

  const changeLanguage: changeLanguageType = (language) => {
    dispatch(setLanguage(language));
  };
  return { data, changeLanguage, lang, currentPage, handlePageChange };
};

export default useHome;
