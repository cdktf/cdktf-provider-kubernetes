// generated from terraform resource schema

import { DeploymentMetadata, 
deploymentMetadataToTerraform, 
DeploymentMetadataOutputReference, 
DeploymentSpec, 
deploymentSpecToTerraform, 
DeploymentSpecOutputReference, 
DeploymentTimeouts, 
deploymentTimeoutsToTerraform, 
DeploymentTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/deployment#id Deployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Wait for the rollout of the deployment to complete. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/deployment#wait_for_rollout Deployment#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/deployment#metadata Deployment#metadata}
  */
  readonly metadata: DeploymentMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/deployment#spec Deployment#spec}
  */
  readonly spec: DeploymentSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/deployment#timeouts Deployment#timeouts}
  */
  readonly timeouts?: DeploymentTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/deployment kubernetes_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/deployment kubernetes_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_deployment',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.21.1',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._waitForRollout = config.waitForRollout;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DeploymentMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DeploymentMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DeploymentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DeploymentSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      metadata: deploymentMetadataToTerraform(this._metadata.internalValue),
      spec: deploymentSpecToTerraform(this._spec.internalValue),
      timeouts: deploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
