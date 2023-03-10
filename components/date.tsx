import { format, parseISO } from 'date-fns';
import { FC } from 'react';

interface Props {
  dateString: string;
}

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
//
