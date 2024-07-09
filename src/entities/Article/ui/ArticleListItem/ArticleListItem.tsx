import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './ArticleListItem.module.scss'
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eyeIcon.svg'
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { RoutePath } from 'shared/config/RouteConfig/routeConfig'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface ArticleListItemProps {
  className?: string
  article: Article
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo(
  (props: ArticleListItemProps) => {
    const {
      className,
      view = ArticleView.SMALL,
      article,
      target
    } = props
    const { t } = useTranslation()

    const types = <Text text={article.type.join(', ')} className={cls.types}/>
    const views = (
      <>
        <Text text={String(article.views)} className={cls.views}/>
        <Icon Svg={EyeIcon}/>
      </>
    )
    const img = <img src={article.img} alt={article.title} className={cls.img}/>
    const title = <Text text={article.title} className={cls.title}/>

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        block => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock

      return (
        <div className={classNames('', {}, [className, cls[view]])}>
          <Card>
            <div className={cls.header}>
              <Avatar size={30} src={article.user.avatar}/>
              <Text text={article.user.username} className={cls.username}/>
              <Text text={article.createdAt} className={cls.date}/>
            </div>
            {title}
            {types}
            {img}
            {textBlock && (
              <ArticleTextBlockComponent className={cls.textBlock} block={textBlock}/>
            )}
            <div className={cls.footer}>
              <AppLink to={RoutePath.article_details + article.id} target={target}>
                <Button theme={ButtonTheme.OUTLINE}>
                  {t('Читать далее')}
                </Button>
              </AppLink>
              {views}
            </div>
          </Card>
        </div>
      )
    }

    return (
      <AppLink to={RoutePath.article_details + article.id} target={target}>
        <div className={classNames('', {}, [className, cls[view]])}>
          <Card>
            <div className={cls.imageWrapper}>
              {img}
              <Text text={article.createdAt} className={cls.date}/>
            </div>
            <div className={cls.infoWrapper}>
              {types}
              {views}
            </div>
            {title}
          </Card>
        </div>
      </AppLink>
    )
  }
)
