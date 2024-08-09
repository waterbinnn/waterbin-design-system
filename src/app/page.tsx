'use client';

import { Button } from '@/components/Button/Button';
import IconDownload from '/public/assets/icons/download.svg';
import IconBack from '/public/assets/icons/arrow_back.svg';

export default function Home() {
  return (
    <main>
      <Button color={'blue'} $rounded disabled>
        버튼
      </Button>
      <Button color={'black'}>버튼</Button>
      <Button kind={'link'} href='/s' title='link'>
        버튼
      </Button>
      <Button kind={'link'} disabled>
        버튼
      </Button>
      <Button kind={'outlined'} $rounded>
        버튼
      </Button>
      <Button kind={'tag'}>버튼</Button>

      <Button color={'blue'} kind={'iconText'} icon={<IconDownload />}>
        버튼
      </Button>
      <Button
        color={'red'}
        kind={'iconText'}
        icon={<IconDownload />}
        iconPosition={'start'}
      >
        버튼
      </Button>
      <Button
        $rounded
        color={'green'}
        kind={'iconText'}
        icon={<IconBack />}
        iconPosition={'start'}
      >
        버튼
      </Button>
      <Button
        color={'transparent'}
        kind={'iconText'}
        icon={<IconBack />}
        iconPosition={'start'}
      >
        버튼
      </Button>
      <Button
        color={'transparent'}
        $rounded
        iconColor={'green'}
        kind={'iconText'}
        icon={<IconBack />}
        iconPosition={'start'}
      >
        버튼
      </Button>
      <Button
        color={'white'}
        kind={'iconText'}
        icon={<IconBack />}
        iconPosition={'end'}
      >
        버튼
      </Button>
      <Button color={'black'} kind={'icon'} icon={<IconBack />}>
        버튼
      </Button>
      <Button $rounded color={'green'} kind={'icon'} icon={<IconBack />}>
        버튼
      </Button>
      <Button color={'white'} kind={'icon'} icon={<IconBack />}>
        버튼
      </Button>
      <Button
        color={'transparent'}
        iconColor={'orange'}
        kind={'icon'}
        icon={<IconBack />}
      >
        버튼
      </Button>
      <Button
        color={'yellow'}
        kind={'tag'}
        icon={<IconBack />}
        iconPosition={'end'}
      >
        버튼
      </Button>
    </main>
  );
}
