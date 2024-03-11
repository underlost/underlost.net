import React from 'react'

import rehypeReact from 'rehype-react'
import { unified } from 'unified'
import { Node } from 'unist'
import ReactGist from 'react-gist'

import { NextLink } from './helpers/NextLink'
import { NextImage } from './helpers/NextImage'

const gist_regex = /https:\/\/gist.github.com\/\S+\/([a-f0-9]+)\.js/g

interface ScriptNodeProps {
  src: string
}

const options = {
  createElement: React.createElement,
  Fragment: React.Fragment,
  passNode: true,
  components: {
    Link: (props: any) => <NextLink {...props} />,
    Image: (props: any) => <NextImage {...props} />,
    script: (props: ScriptNodeProps) => {
      const match = gist_regex.exec(props.src)
      if (match && match.length > 1) {
        return <ReactGist id={match[1]} />
      }
      return null
    },
  },
}

const renderAst = unified().use(rehypeReact as any, options)

interface RenderContentProps {
  htmlAst: Node | null
}

export const RenderContent = ({ htmlAst }: RenderContentProps) => {
  if (!htmlAst) return null
  return <>{renderAst.stringify(htmlAst)}</>
}

//<div className="post-content load-external-scripts">{renderAst.stringify(htmlAst)}</div>
