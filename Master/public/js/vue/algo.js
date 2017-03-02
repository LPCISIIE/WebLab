/**
 * Function to add a Slave to the HTML Page
 */
function addSlave (slaveObject, state) {
  if (!$('.' + slaveObject.id).length) {
    let serverName = 'Server ' + slaveObject.ip + ':' + slaveObject.port
    let icon = $('<i>').addClass('ui disk outline icon')
    let title = $('<h3>').text(serverName).prepend(icon)
    let slave = $('<div>').addClass('slave ' + slaveObject.id)
    $.getJSON('http://' + slaveObject.ip + ':' + slaveObject.port + '/hardware', (config, textStatus) => {
      let totalRAM
      let currentRAM
      if (config.platform === 'linux') {
        totalRAM = (config.totalmem / Math.pow(10, 9)).toFixed(2)
        currentRAM = (config.freemem / Math.pow(10, 8)).toFixed(2)
      } else {
        totalRAM = (config.totalmem / Math.pow(10, 9)).toFixed(2)
        currentRAM = (config.freemem / Math.pow(10, 9)).toFixed(2)
      }
      let cpu = $('<div>').addClass('ui green active progress')
      cpu.append($('<div>').attr('style', 'transition-duration: 300ms; width:' + config.cpuUsage.toFixed(1) + '%;')
            .addClass('bar')
            .append($('<div>').addClass('progress').text(config.cpuUsage.toFixed(0) + '%')))
      let percent = Math.round((currentRAM * 100) / totalRAM)
      let ram = $('<div>').addClass('ui orange active progress')
           .append($('<div>').attr('style', 'transition-duration: 300ms; width:' + percent + '%;')
               .addClass('bar')
               .append($('<div>').addClass('progress').text(percent + '%'))
           ).append($('<div>').addClass('label').text('Memory : ' + currentRAM + 'GB /' + totalRAM + 'GB'))
      slave.append(cpu.clone().append($('<div>').addClass('label').text('CPU : ' + config.cpus[0].model + ' x' + config.cpus.length)))
      slave.append(ram)
      let card = createHTMLCard(serverName, cpu.clone().append($('<div>').addClass('label').text('CPU : ' + config.cpus[0].model)), ram, slaveObject)
      $('#container1').append(card)
      toggleSlaves(state)
    })
    $('#slaveContainer').append(slave.append(title))
  }
}

function toggleSlaves (state) {
  if (!state) {
    $('.card').each(function (index, el) {
      $(this).append($('<div>').addClass('slave-disabled'))
    })
  } else {
    $('.card').each(function (index, el) {
      $(this).find('.slave-disabled').remove()
    })
  }
}
function createHTMLCard (serverName, cpuBar, ramBar, slave) {
  let headerContent = '<i class="disk green outline icon"></i> ' + serverName
  let header = '<div class="header">' + headerContent + '</div>'
  let description = '<div class="description"> ' + cpuBar[0].outerHTML + '<br/>' + ramBar[0].outerHTML + '</div> <br/> ' +
        '<form class="ui form"> <div class="field"> <input type="number" required class="iteration" placeholder="Number of iterations"> </div> </form>'
  let body = '<div class="meta"> Available </div>' + description
  let action1 = '<div class="ui basic blue button launch" id="' + slave.ip + ':' + slave.port + '"> Run </div>'
  let action2 = '<div class="ui basic green button"> Pause </div>'
  let action3 = '<div class="ui basic red button"> Stop </div>'
  let actions = action1 + action2 + action3
  let buttons = '<div class="extra content center aligned grid"> <div class="ui one buttons">' + actions + '</div> </div>'
  let content = header + body
  return $('<div>').addClass('card ' + slave.id).append($('<div>').addClass('content').append(content)).append(buttons)
}
