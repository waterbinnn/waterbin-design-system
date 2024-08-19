'use client';

import { Button } from '@/components/Button/Button';
import IconDownload from '@/assets/icons/download.svg';
import IconBack from '@/assets/icons/arrow_back.svg';
import { useState } from 'react';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <main>
      <Button
        onClick={handleClick}
        loading={isClicked}
        kind='filled'
        role=''
        color={'blue'}
        rounded
      >
        Button
      </Button>
      <Button disabled kind='filled' role='' color={'black'}>
        버튼
      </Button>
      <Button kind='filled' role='' color={'black'}>
        버튼
      </Button>
      <Button loading role='' kind={'link'} href='/s' title='link'>
        버튼
      </Button>
      <Button role='dis' kind={'link'} disabled>
        버튼
      </Button>
      <Button role='outlined' kind={'outlined'} rounded loading>
        버튼
      </Button>
      <Button kind={'tag'} role='tag'>
        버튼
      </Button>

      <Button color={'blue'} kind={'iconText'} icon={<IconDownload />} role=''>
        버튼
      </Button>
      <Button
        color={'red'}
        kind={'iconText'}
        icon={<IconDownload />}
        iconPosition={'start'}
        role=''
      >
        버튼
      </Button>
      <Button
        rounded
        color={'green'}
        kind={'iconText'}
        icon={<IconBack />}
        iconPosition={'start'}
        role=''
      >
        버튼
      </Button>
      <Button
        color={'transparent'}
        kind={'iconText'}
        icon={<IconBack />}
        iconPosition={'start'}
        role=''
      >
        버튼
      </Button>
      <Button
        color={'transparent'}
        rounded
        iconColor={'green'}
        kind={'iconText'}
        icon={<IconBack />}
        iconPosition={'start'}
        role=''
      >
        버튼
      </Button>
      <Button
        color={'white'}
        kind={'iconText'}
        icon={<IconBack />}
        iconPosition={'end'}
        role=''
      >
        버튼
      </Button>
      <Button color={'black'} kind={'icon'} icon={<IconBack />} role=''>
        버튼
      </Button>
      <Button rounded color={'green'} kind={'icon'} icon={<IconBack />} role=''>
        버튼
      </Button>
      <Button color={'white'} kind={'icon'} icon={<IconBack />} role=''>
        버튼
      </Button>
      <Button
        color={'transparent'}
        iconColor={'orange'}
        kind={'icon'}
        icon={<IconBack />}
        role=''
      >
        버튼
      </Button>
      <Button
        color={'yellow'}
        kind={'tag'}
        icon={<IconBack />}
        iconPosition={'end'}
        role=''
      >
        버튼
      </Button>
    </main>
  );
}
