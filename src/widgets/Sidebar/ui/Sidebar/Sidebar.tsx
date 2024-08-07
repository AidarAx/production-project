import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useState } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from './SidebarItem/SidebarItem'

import * as cls from './Sidebar.module.scss'
import { useSelector } from 'react-redux'
import { getSidebarItemList } from '../../model/selectors/sidebarItemList'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemList = useSelector(getSidebarItemList)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
      <menu
        data-testid={'sidebar'}
        className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
        <Button data-testid={'sidebar-toggle'}
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square>
          { collapsed ? '>' : '<' }
        </Button>
        <div className={cls.items}>
          {sidebarItemList.map(item => (
            <SidebarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          ))}
        </div>
        <div className={cls.switchers}>
          <ThemeSwitcher/>
          <LangSwitcher short={collapsed}/>
        </div>
      </menu>
  )
}
)
