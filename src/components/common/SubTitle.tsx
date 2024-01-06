import style from "./SubTitle.module.css";

interface SubTitleProps {
  subTitle: string;
}
const SubTitle = ({ subTitle }: SubTitleProps) => {
  return <h2 className={style.subTitle}>{subTitle}</h2>;
};

export default SubTitle;
