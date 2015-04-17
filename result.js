{
  start: 0,
  body: [
    {
      start: 0,
      declarations: [
        {
          start: 4,
          id: {
            start: 4,
            name: '_',
            type: 'Identifier',
            end: 5
          },
          init: {
            start: 8,
            callee: {
              start: 8,
              name: 'require',
              type: 'Identifier',
              end: 15
            },
            arguments: [
              {
                start: 16,
                value: 'lodash',
                raw: '\'lodash\'',
                type: 'Literal',
                end: 24
              }
            ],
            type: 'CallExpression',
            end: 25
          },
          type: 'VariableDeclarator',
          end: 25
        }
      ],
      kind: 'var',
      type: 'VariableDeclaration',
      end: 26
    },
    {
      start: 30,
      declarations: [
        {
          start: 34,
          id: {
            start: 34,
            name: 'hello',
            type: 'Identifier',
            end: 39
          },
          init: {
            start: 42,
            value: 'Hello World!',
            raw: '\'Hello World!\'',
            type: 'Literal',
            end: 56
          },
          type: 'VariableDeclarator',
          end: 56
        }
      ],
      kind: 'var',
      type: 'VariableDeclaration',
      end: 57
    },
    {
      start: 59,
      expression: {
        start: 59,
        callee: {
          start: 59,
          object: {
            start: 59,
            name: 'console',
            type: 'Identifier',
            end: 66
          },
          property: {
            start: 67,
            name: 'log',
            type: 'Identifier',
            end: 70
          },
          computed: false,
          type: 'MemberExpression',
          end: 70
        },
        arguments: [
          {
            start: 71,
            name: 'hello',
            type: 'Identifier',
            end: 76
          }
        ],
        type: 'CallExpression',
        end: 77
      },
      type: 'ExpressionStatement',
      end: 78
    },
    {
      start: 82,
      expression: {
        start: 82,
        callee: {
          start: 82,
          object: {
            start: 82,
            name: '_',
            type: 'Identifier',
            end: 83
          },
          property: {
            start: 84,
            name: 'times',
            type: 'Identifier',
            end: 89
          },
          computed: false,
          type: 'MemberExpression',
          end: 89
        },
        arguments: [
          {
            start: 90,
            value: 10,
            raw: '10',
            type: 'Literal',
            end: 92
          },
          {
            start: 94,
            id: null,
            params: [
              {
                start: 104,
                name: 'i',
                type: 'Identifier',
                end: 105
              }
            ],
            body: {
              start: 107,
              body: [
                {
                  start: 112,
                  test: {
                    start: 116,
                    left: {
                      start: 116,
                      name: 'i',
                      type: 'Identifier',
                      end: 117
                    },
                    operator: '>',
                    right: {
                      start: 120,
                      value: 0,
                      raw: '0',
                      type: 'Literal',
                      end: 121
                    },
                    type: 'BinaryExpression',
                    end: 121
                  },
                  consequent: {
                    start: 123,
                    body: [
                      {
                        start: 125,
                        expression: {
                          start: 125,
                          callee: {
                            start: 125,
                            object: {
                              start: 125,
                              object: {
                                start: 125,
                                name: 'process',
                                type: 'Identifier',
                                end: 132
                              },
                              property: {
                                start: 133,
                                name: 'stdout',
                                type: 'Identifier',
                                end: 139
                              },
                              computed: false,
                              type: 'MemberExpression',
                              end: 139
                            },
                            property: {
                              start: 140,
                              name: 'write',
                              type: 'Identifier',
                              end: 145
                            },
                            computed: false,
                            type: 'MemberExpression',
                            end: 145
                          },
                          arguments: [
                            {
                              start: 146,
                              value: ', ',
                              raw: '\', \'',
                              type: 'Literal',
                              end: 150
                            }
                          ],
                          type: 'CallExpression',
                          end: 151
                        },
                        type: 'ExpressionStatement',
                        end: 152
                      }
                    ],
                    type: 'BlockStatement',
                    end: 154
                  },
                  alternate: null,
                  type: 'IfStatement',
                  end: 154
                },
                {
                  start: 158,
                  expression: {
                    start: 158,
                    callee: {
                      start: 158,
                      object: {
                        start: 158,
                        object: {
                          start: 158,
                          name: 'process',
                          type: 'Identifier',
                          end: 165
                        },
                        property: {
                          start: 166,
                          name: 'stdout',
                          type: 'Identifier',
                          end: 172
                        },
                        computed: false,
                        type: 'MemberExpression',
                        end: 172
                      },
                      property: {
                        start: 173,
                        name: 'write',
                        type: 'Identifier',
                        end: 178
                      },
                      computed: false,
                      type: 'MemberExpression',
                      end: 178
                    },
                    arguments: [
                      {
                        start: 179,
                        left: {
                          start: 180,
                          left: {
                            start: 180,
                            name: 'i',
                            type: 'Identifier',
                            end: 181
                          },
                          operator: '+',
                          right: {
                            start: 184,
                            value: 1,
                            raw: '1',
                            type: 'Literal',
                            end: 185
                          },
                          type: 'BinaryExpression',
                          end: 185
                        },
                        operator: '+',
                        right: {
                          start: 189,
                          value: '',
                          raw: '\'\'',
                          type: 'Literal',
                          end: 191
                        },
                        type: 'BinaryExpression',
                        end: 191
                      }
                    ],
                    type: 'CallExpression',
                    end: 192
                  },
                  type: 'ExpressionStatement',
                  end: 193
                }
              ],
              type: 'BlockStatement',
              end: 196
            },
            expression: false,
            type: 'FunctionExpression',
            end: 196
          }
        ],
        type: 'CallExpression',
        end: 197
      },
      type: 'ExpressionStatement',
      end: 198
    },
    {
      start: 202,
      expression: {
        start: 202,
        callee: {
          start: 202,
          object: {
            start: 202,
            name: 'console',
            type: 'Identifier',
            end: 209
          },
          property: {
            start: 210,
            name: 'log',
            type: 'Identifier',
            end: 213
          },
          computed: false,
          type: 'MemberExpression',
          end: 213
        },
        arguments: [
          {
            start: 214,
            value: '',
            raw: '\'\'',
            type: 'Literal',
            end: 216
          }
        ],
        type: 'CallExpression',
        end: 217
      },
      type: 'ExpressionStatement',
      end: 218
    }
  ],
  type: 'Program',
  end: 218
}
