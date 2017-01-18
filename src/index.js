import React, { Component } from 'react';
import invariant from 'invariant';

export default function ScrollLockHOC({ className } = {}) {
    return function ScrollLockDecorate(WrappedComponent) {
        invariant(
            typeof WrappedComponent === 'function',
            `Expected "WrappedComponent" provided as the first argument to ScrollLockHOC
            to be a function. Instead, received ${typeof WrappedComponent}.`,
        );

        function getDisplayName() {
            return WrappedComponent.displayName || WrappedComponent.name || 'Component';
        }

        return class ScrollLock extends Component {
            static displayName = `withScrollLockHOC(${getDisplayName()})`;

            onScroll = (event) => {
                const { containerNode } = this;
                const { scrollTop, scrollHeight, clientHeight } = containerNode;
                const wheelDelta = event.deltaY;
                const isDeltaPositive = wheelDelta > 0;

                if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
                    containerNode.scrollTop = scrollHeight;

                    event.preventDefault();
                } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
                    containerNode.scrollTop = 0;

                    event.preventDefault();
                }
            }

            containerRef = (node) => {
                this.containerNode = node ? node.firstChild : node;
            }

            getContainerProps() {
                let props = {
                    style: {
                        display: 'inline-block',
                    },
                };

                if (className) {
                    props = { className };
                }

                return props;
            }

            render() {
                const containerProps = this.getContainerProps();

                return (
                    <div
                        {...containerProps}
                        onWheel={this.onScroll}
                        ref={this.containerRef}
                    >
                        <WrappedComponent {...this.props} />
                    </div>
                );
            }
        };
    };
}
