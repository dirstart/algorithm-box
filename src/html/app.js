document.addEventListener('DOMContentLoaded', function () {
  const switchContainer = document.getElementById('switchContainer')
  // const totalSwitches = 1500
  // const portsPerSwitch = 48 // 假设每个交换机有48个端口
  const totalSwitches = 10
  const portsPerSwitch = 48 // 假设每个交换机有48个端口

  // 创建交换机元素
  function createSwitchElement(switchId) {
    const switchElement = document.createElement('div')
    switchElement.className = 'switch'

    // 交换机头部
    const header = document.createElement('div')
    header.className = 'switch-header'

    const name = document.createElement('div')
    name.className = 'switch-name'
    name.textContent = `SW-${switchId}`

    const status = document.createElement('div')
    status.className = 'switch-status'

    header.appendChild(name)
    header.appendChild(status)

    // 端口容器
    const portsContainer = document.createElement('div')
    portsContainer.className = 'ports-container'

    // 创建端口
    for (let i = 1; i <= portsPerSwitch; i++) {
      const port = document.createElement('div')
      port.className = 'port'
      port.dataset.portId = i

      const portNumber = document.createElement('div')
      portNumber.className = 'port-number'
      portNumber.textContent = i

      port.appendChild(portNumber)
      portsContainer.appendChild(port)

      // 随机设置一些端口为活动状态
      if (Math.random() > 0.7) {
        port.classList.add('active')
      }
    }

    switchElement.appendChild(header)
    switchElement.appendChild(portsContainer)

    return switchElement
  }

  // 渲染所有交换机
  function renderSwitches() {
    // 使用文档片段减少重绘
    const fragment = document.createDocumentFragment()

    for (let i = 1; i <= totalSwitches; i++) {
      fragment.appendChild(createSwitchElement(i))

      // 分批渲染以避免阻塞UI
      if (i % 100 === 0) {
        switchContainer.appendChild(fragment)
        // 让浏览器有机会渲染
        setTimeout(() => {}, 0)
      }
    }

    switchContainer.appendChild(fragment)
  }

  // 模拟端口状态变化
  function simulatePortActivity() {
    const allPorts = document.querySelectorAll('.port')

    setInterval(() => {
      // 随机选择一些端口改变状态
      const portsToChange = Math.floor(allPorts.length * 0.05) // 5%的端口

      for (let i = 0; i < portsToChange; i++) {
        const randomIndex = Math.floor(Math.random() * allPorts.length)
        const port = allPorts[randomIndex]

        if (port.classList.contains('active')) {
          port.classList.remove('active')
        } else {
          port.classList.add('active')
        }
      }
    }, 1000) // 每秒更新一次
  }

  // 初始化
  renderSwitches()
  simulatePortActivity()
})
