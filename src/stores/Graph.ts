export class Node {
  constructor(
    public id: string,
    public label: string,
    public type: 'main' | 'primary' | 'secondary'
  ) {}
}

export class Edge {
  constructor(
    public from: Node,
    public to: Node
  ) {}
}

export class Graph {
  constructor(public nodes: Node[]) {}
}
const mainNode = new Node('main', 'Software Developer', 'main')
const informationNode = new Node('personal_information', 'Personal Information', 'primary')
const certifications = new Node('certifications', 'Certifications', 'primary')
const languages = new Node('languages', 'Languages', 'secondary')
const education = new Node('education', 'Education', 'secondary')
export const graph = new Graph([])
