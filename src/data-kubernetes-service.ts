// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataKubernetesServiceConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: DataKubernetesServiceMetadata[];
}
export class DataKubernetesServiceLoadBalancerIngress extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: true
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesServiceSpecPort extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_port - computed: true, optional: false, required: true
  public get nodePort() {
    return this.getNumberAttribute('node_port');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // target_port - computed: true, optional: false, required: true
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
}
export class DataKubernetesServiceSpec extends ComplexComputedList {

  // cluster_ip - computed: true, optional: false, required: true
  public get clusterIp() {
    return this.getStringAttribute('cluster_ip');
  }

  // external_ips - computed: true, optional: false, required: true
  public get externalIps() {
    return this.getListAttribute('external_ips');
  }

  // external_name - computed: true, optional: false, required: true
  public get externalName() {
    return this.getStringAttribute('external_name');
  }

  // external_traffic_policy - computed: true, optional: false, required: true
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }

  // health_check_node_port - computed: true, optional: false, required: true
  public get healthCheckNodePort() {
    return this.getNumberAttribute('health_check_node_port');
  }

  // load_balancer_ip - computed: true, optional: false, required: true
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }

  // load_balancer_source_ranges - computed: true, optional: false, required: true
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return 'not implemented' as any;
  }

  // publish_not_ready_addresses - computed: true, optional: false, required: true
  public get publishNotReadyAddresses() {
    return this.getBooleanAttribute('publish_not_ready_addresses');
  }

  // selector - computed: true, optional: false, required: true
  public get selector() {
    return 'not implemented' as any;
  }

  // session_affinity - computed: true, optional: false, required: true
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataKubernetesServiceMetadata {
  /** An unstructured key value map stored with the service that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the service. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the service, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the service must be unique. */
  readonly namespace?: string;
}

// Resource

export class DataKubernetesService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataKubernetesServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_service',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_ingress - computed: true, optional: false, required: true
  public loadBalancerIngress(index: string) {
    return new DataKubernetesServiceLoadBalancerIngress(this, 'load_balancer_ingress', index);
  }

  // spec - computed: true, optional: false, required: true
  public spec(index: string) {
    return new DataKubernetesServiceSpec(this, 'spec', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesServiceMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: DataKubernetesServiceMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
    };
  }
}
