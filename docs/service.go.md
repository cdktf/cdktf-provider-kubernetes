# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-kubernetes.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-kubernetes.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service kubernetes_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.Service.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewService(scope Construct, id *string, config ServiceConfig) Service
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.service.Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceConfig">ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.resetWaitForLoadBalancer">ResetWaitForLoadBalancer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.Service.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.service.Service.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.service.Service.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.Service.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.service.Service.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.service.Service.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.service.Service.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.service.Service.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.service.Service.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.service.Service.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.Service.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.Service.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.Service.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.Service.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.Service.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.Service.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.Service.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.Service.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.Service.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.service.Service.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.service.Service.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.service.Service.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.service.Service.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.Service.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.service.Service.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.service.Service.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.service.Service.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.service.Service.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.service.Service.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.service.Service.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.service.Service.putMetadata"></a>

```go
func PutMetadata(value ServiceMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.Service.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.service.Service.putSpec"></a>

```go
func PutSpec(value ServiceSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.Service.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.service.Service.putTimeouts"></a>

```go
func PutTimeouts(value ServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.Service.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.service.Service.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.service.Service.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWaitForLoadBalancer` <a name="ResetWaitForLoadBalancer" id="@cdktf/provider-kubernetes.service.Service.resetWaitForLoadBalancer"></a>

```go
func ResetWaitForLoadBalancer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.service.Service.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.Service_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.service.Service.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.service.Service.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.Service_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.service.Service.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.Service_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.Service_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference">ServiceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference">ServiceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.status">Status</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList">ServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference">ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.waitForLoadBalancerInput">WaitForLoadBalancerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.waitForLoadBalancer">WaitForLoadBalancer</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.service.Service.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.service.Service.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.Service.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.service.Service.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.service.Service.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.service.Service.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.service.Service.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.service.Service.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.service.Service.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.service.Service.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.service.Service.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.service.Service.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.service.Service.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.service.Service.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.service.Service.property.metadata"></a>

```go
func Metadata() ServiceMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference">ServiceMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.service.Service.property.spec"></a>

```go
func Spec() ServiceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference">ServiceSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-kubernetes.service.Service.property.status"></a>

```go
func Status() ServiceStatusList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusList">ServiceStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.service.Service.property.timeouts"></a>

```go
func Timeouts() ServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference">ServiceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.service.Service.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.service.Service.property.metadataInput"></a>

```go
func MetadataInput() ServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.service.Service.property.specInput"></a>

```go
func SpecInput() ServiceSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.service.Service.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForLoadBalancerInput`<sup>Optional</sup> <a name="WaitForLoadBalancerInput" id="@cdktf/provider-kubernetes.service.Service.property.waitForLoadBalancerInput"></a>

```go
func WaitForLoadBalancerInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.service.Service.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WaitForLoadBalancer`<sup>Required</sup> <a name="WaitForLoadBalancer" id="@cdktf/provider-kubernetes.service.Service.property.waitForLoadBalancer"></a>

```go
func WaitForLoadBalancer() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.Service.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.service.Service.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-kubernetes.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.service.ServiceMetadata,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.service.ServiceSpec,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.service.ServiceTimeouts,
	WaitForLoadBalancer: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceConfig.property.waitForLoadBalancer">WaitForLoadBalancer</a></code> | <code>interface{}</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.metadata"></a>

```go
Metadata ServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#metadata Service#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.spec"></a>

```go
Spec ServiceSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#spec Service#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.timeouts"></a>

```go
Timeouts ServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts">ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#timeouts Service#timeouts}

---

##### `WaitForLoadBalancer`<sup>Optional</sup> <a name="WaitForLoadBalancer" id="@cdktf/provider-kubernetes.service.ServiceConfig.property.waitForLoadBalancer"></a>

```go
WaitForLoadBalancer interface{}
```

- *Type:* interface{}

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#wait_for_load_balancer Service#wait_for_load_balancer}

---

### ServiceMetadata <a name="ServiceMetadata" id="@cdktf/provider-kubernetes.service.ServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceMetadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the service that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.name">Name</a></code> | <code>*string</code> | Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the service must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#annotations Service#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#generate_name Service#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#labels Service#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#name Service#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.service.ServiceMetadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#namespace Service#namespace}

---

### ServiceSpec <a name="ServiceSpec" id="@cdktf/provider-kubernetes.service.ServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceSpec {
	AllocateLoadBalancerNodePorts: interface{},
	ClusterIp: *string,
	ClusterIps: *[]*string,
	ExternalIps: *[]*string,
	ExternalName: *string,
	ExternalTrafficPolicy: *string,
	HealthCheckNodePort: *f64,
	InternalTrafficPolicy: *string,
	IpFamilies: *[]*string,
	IpFamilyPolicy: *string,
	LoadBalancerClass: *string,
	LoadBalancerIp: *string,
	LoadBalancerSourceRanges: *[]*string,
	Port: interface{},
	PublishNotReadyAddresses: interface{},
	Selector: *map[string]*string,
	SessionAffinity: *string,
	SessionAffinityConfig: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.service.ServiceSpecSessionAffinityConfig,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.allocateLoadBalancerNodePorts">AllocateLoadBalancerNodePorts</a></code> | <code>interface{}</code> | Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.clusterIp">ClusterIp</a></code> | <code>*string</code> | The IP address of the service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.clusterIps">ClusterIps</a></code> | <code>*[]*string</code> | List of IP addresses assigned to this service, and are usually assigned randomly. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.externalIps">ExternalIps</a></code> | <code>*[]*string</code> | A list of IP addresses for which nodes in the cluster will also accept traffic for this service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.externalName">ExternalName</a></code> | <code>*string</code> | The external reference that kubedns or equivalent will return as a CNAME record for this service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.externalTrafficPolicy">ExternalTrafficPolicy</a></code> | <code>*string</code> | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.healthCheckNodePort">HealthCheckNodePort</a></code> | <code>*f64</code> | Specifies the Healthcheck NodePort for the service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.internalTrafficPolicy">InternalTrafficPolicy</a></code> | <code>*string</code> | Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.ipFamilies">IpFamilies</a></code> | <code>*[]*string</code> | IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.ipFamilyPolicy">IpFamilyPolicy</a></code> | <code>*string</code> | IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerClass">LoadBalancerClass</a></code> | <code>*string</code> | The class of the load balancer implementation this Service belongs to. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerIp">LoadBalancerIp</a></code> | <code>*string</code> | Only applies to `type = LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerSourceRanges">LoadBalancerSourceRanges</a></code> | <code>*[]*string</code> | If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.port">Port</a></code> | <code>interface{}</code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.publishNotReadyAddresses">PublishNotReadyAddresses</a></code> | <code>interface{}</code> | When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.selector">Selector</a></code> | <code>*map[string]*string</code> | Route service traffic to pods with label keys and values matching this selector. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.sessionAffinityConfig">SessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a></code> | session_affinity_config block. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec.property.type">Type</a></code> | <code>*string</code> | Determines how the service is exposed. |

---

##### `AllocateLoadBalancerNodePorts`<sup>Optional</sup> <a name="AllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.allocateLoadBalancerNodePorts"></a>

```go
AllocateLoadBalancerNodePorts interface{}
```

- *Type:* interface{}

Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`.

It may be set to `false` if the cluster load-balancer does not rely on `NodePorts`.  If the caller requests specific `NodePorts` (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type `LoadBalancer`. Default is `true`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#allocate_load_balancer_node_ports Service#allocate_load_balancer_node_ports}

---

##### `ClusterIp`<sup>Optional</sup> <a name="ClusterIp" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.clusterIp"></a>

```go
ClusterIp *string
```

- *Type:* *string

The IP address of the service.

It is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. `None` can be specified for headless services when proxying is not required. Ignored if type is `ExternalName`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#cluster_ip Service#cluster_ip}

---

##### `ClusterIps`<sup>Optional</sup> <a name="ClusterIps" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.clusterIps"></a>

```go
ClusterIps *[]*string
```

- *Type:* *[]*string

List of IP addresses assigned to this service, and are usually assigned randomly.

If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise creation of the service will fail. If this field is not specified, it will be initialized from the `clusterIP` field. If this field is specified, clients must ensure that `clusterIPs[0]` and `clusterIP` have the same value. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#cluster_ips Service#cluster_ips}

---

##### `ExternalIps`<sup>Optional</sup> <a name="ExternalIps" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.externalIps"></a>

```go
ExternalIps *[]*string
```

- *Type:* *[]*string

A list of IP addresses for which nodes in the cluster will also accept traffic for this service.

These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#external_ips Service#external_ips}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.externalName"></a>

```go
ExternalName *string
```

- *Type:* *string

The external reference that kubedns or equivalent will return as a CNAME record for this service.

No proxying will be involved. Must be a valid DNS name and requires `type` to be `ExternalName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#external_name Service#external_name}

---

##### `ExternalTrafficPolicy`<sup>Optional</sup> <a name="ExternalTrafficPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.externalTrafficPolicy"></a>

```go
ExternalTrafficPolicy *string
```

- *Type:* *string

Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

`Local` preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. `Cluster` obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. More info: https://kubernetes.io/docs/tutorials/services/source-ip/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#external_traffic_policy Service#external_traffic_policy}

---

##### `HealthCheckNodePort`<sup>Optional</sup> <a name="HealthCheckNodePort" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.healthCheckNodePort"></a>

```go
HealthCheckNodePort *f64
```

- *Type:* *f64

Specifies the Healthcheck NodePort for the service.

Only effects when type is set to `LoadBalancer` and external_traffic_policy is set to `Local`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#health_check_node_port Service#health_check_node_port}

---

##### `InternalTrafficPolicy`<sup>Optional</sup> <a name="InternalTrafficPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.internalTrafficPolicy"></a>

```go
InternalTrafficPolicy *string
```

- *Type:* *string

Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only.

`Cluster` routes internal traffic to a Service to all endpoints. `Local` routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is `Cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#internal_traffic_policy Service#internal_traffic_policy}

---

##### `IpFamilies`<sup>Optional</sup> <a name="IpFamilies" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.ipFamilies"></a>

```go
IpFamilies *[]*string
```

- *Type:* *[]*string

IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#ip_families Service#ip_families}

---

##### `IpFamilyPolicy`<sup>Optional</sup> <a name="IpFamilyPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.ipFamilyPolicy"></a>

```go
IpFamilyPolicy *string
```

- *Type:* *string

IPFamilyPolicy represents the dual-stack-ness requested or required by this Service.

If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#ip_family_policy Service#ip_family_policy}

---

##### `LoadBalancerClass`<sup>Optional</sup> <a name="LoadBalancerClass" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerClass"></a>

```go
LoadBalancerClass *string
```

- *Type:* *string

The class of the load balancer implementation this Service belongs to.

If specified, the value of this field must be a label-style identifier, with an optional prefix. This field can only be set when the Service type is `LoadBalancer`. If not set, the default load balancer implementation is used. This field can only be set when creating or updating a Service to type `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#load_balancer_class Service#load_balancer_class}

---

##### `LoadBalancerIp`<sup>Optional</sup> <a name="LoadBalancerIp" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerIp"></a>

```go
LoadBalancerIp *string
```

- *Type:* *string

Only applies to `type = LoadBalancer`.

LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying this field when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#load_balancer_ip Service#load_balancer_ip}

---

##### `LoadBalancerSourceRanges`<sup>Optional</sup> <a name="LoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.loadBalancerSourceRanges"></a>

```go
LoadBalancerSourceRanges *[]*string
```

- *Type:* *[]*string

If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.

This field will be ignored if the cloud-provider does not support the feature. More info: http://kubernetes.io/docs/user-guide/services-firewalls

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#load_balancer_source_ranges Service#load_balancer_source_ranges}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.port"></a>

```go
Port interface{}
```

- *Type:* interface{}

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#port Service#port}

---

##### `PublishNotReadyAddresses`<sup>Optional</sup> <a name="PublishNotReadyAddresses" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.publishNotReadyAddresses"></a>

```go
PublishNotReadyAddresses interface{}
```

- *Type:* interface{}

When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service.

The default value is `false`. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate `SRV` records for its Pods without respect to their readiness for purpose of peer discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#publish_not_ready_addresses Service#publish_not_ready_addresses}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.selector"></a>

```go
Selector *map[string]*string
```

- *Type:* *map[string]*string

Route service traffic to pods with label keys and values matching this selector.

Only applies to types `ClusterIP`, `NodePort`, and `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#selector Service#selector}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.sessionAffinity"></a>

```go
SessionAffinity *string
```

- *Type:* *string

Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#session_affinity Service#session_affinity}

---

##### `SessionAffinityConfig`<sup>Optional</sup> <a name="SessionAffinityConfig" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.sessionAffinityConfig"></a>

```go
SessionAffinityConfig ServiceSpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a>

session_affinity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#session_affinity_config Service#session_affinity_config}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-kubernetes.service.ServiceSpec.property.type"></a>

```go
Type *string
```

- *Type:* *string

Determines how the service is exposed.

Defaults to `ClusterIP`. Valid options are `ExternalName`, `ClusterIP`, `NodePort`, and `LoadBalancer`. `ExternalName` maps to the specified `external_name`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#type Service#type}

---

### ServiceSpecPort <a name="ServiceSpecPort" id="@cdktf/provider-kubernetes.service.ServiceSpecPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceSpecPort {
	Port: *f64,
	AppProtocol: *string,
	Name: *string,
	NodePort: *f64,
	Protocol: *string,
	TargetPort: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.port">Port</a></code> | <code>*f64</code> | The port that will be exposed by this service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.appProtocol">AppProtocol</a></code> | <code>*string</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.name">Name</a></code> | <code>*string</code> | The name of this port within the service. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.nodePort">NodePort</a></code> | <code>*f64</code> | The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.protocol">Protocol</a></code> | <code>*string</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPort.property.targetPort">TargetPort</a></code> | <code>*string</code> | Number or name of the port to access on the pods targeted by the service. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port that will be exposed by this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#port Service#port}

---

##### `AppProtocol`<sup>Optional</sup> <a name="AppProtocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.appProtocol"></a>

```go
AppProtocol *string
```

- *Type:* *string

The application protocol for this port.

This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#app_protocol Service#app_protocol}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this port within the service.

All ports within the service must have unique names. Optional if only one ServicePort is defined on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#name Service#name}

---

##### `NodePort`<sup>Optional</sup> <a name="NodePort" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.nodePort"></a>

```go
NodePort *f64
```

- *Type:* *f64

The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`.

Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the `type` of this service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#node_port Service#node_port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#protocol Service#protocol}

---

##### `TargetPort`<sup>Optional</sup> <a name="TargetPort" id="@cdktf/provider-kubernetes.service.ServiceSpecPort.property.targetPort"></a>

```go
TargetPort *string
```

- *Type:* *string

Number or name of the port to access on the pods targeted by the service.

Number must be in the range 1 to 65535. This field is ignored for services with `cluster_ip = "None"`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#target_port Service#target_port}

---

### ServiceSpecSessionAffinityConfig <a name="ServiceSpecSessionAffinityConfig" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceSpecSessionAffinityConfig {
	ClientIp: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.service.ServiceSpecSessionAffinityConfigClientIp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig.property.clientIp">ClientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a></code> | client_ip block. |

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig.property.clientIp"></a>

```go
ClientIp ServiceSpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a>

client_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#client_ip Service#client_ip}

---

### ServiceSpecSessionAffinityConfigClientIp <a name="ServiceSpecSessionAffinityConfigClientIp" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceSpecSessionAffinityConfigClientIp {
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Specifies the seconds of `ClientIP` type session sticky time. |

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Specifies the seconds of `ClientIP` type session sticky time.

The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#timeout_seconds Service#timeout_seconds}

---

### ServiceStatus <a name="ServiceStatus" id="@cdktf/provider-kubernetes.service.ServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceStatus {

}
```


### ServiceStatusLoadBalancer <a name="ServiceStatusLoadBalancer" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceStatusLoadBalancer {

}
```


### ServiceStatusLoadBalancerIngress <a name="ServiceStatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceStatusLoadBalancerIngress {

}
```


### ServiceTimeouts <a name="ServiceTimeouts" id="@cdktf/provider-kubernetes.service.ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.service.ServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

&service.ServiceTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#create Service#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.service.ServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/service#create Service#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMetadataOutputReference <a name="ServiceMetadataOutputReference" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceMetadata">ServiceMetadata</a>

---


### ServiceSpecOutputReference <a name="ServiceSpecOutputReference" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putPort">PutPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putSessionAffinityConfig">PutSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetAllocateLoadBalancerNodePorts">ResetAllocateLoadBalancerNodePorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetClusterIp">ResetClusterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetClusterIps">ResetClusterIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalIps">ResetExternalIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalTrafficPolicy">ResetExternalTrafficPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetHealthCheckNodePort">ResetHealthCheckNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetInternalTrafficPolicy">ResetInternalTrafficPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetIpFamilies">ResetIpFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetIpFamilyPolicy">ResetIpFamilyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerClass">ResetLoadBalancerClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerIp">ResetLoadBalancerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerSourceRanges">ResetLoadBalancerSourceRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetPublishNotReadyAddresses">ResetPublishNotReadyAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSessionAffinityConfig">ResetSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPort` <a name="PutPort" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putPort"></a>

```go
func PutPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putPort.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSessionAffinityConfig` <a name="PutSessionAffinityConfig" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putSessionAffinityConfig"></a>

```go
func PutSessionAffinityConfig(value ServiceSpecSessionAffinityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.putSessionAffinityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a>

---

##### `ResetAllocateLoadBalancerNodePorts` <a name="ResetAllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetAllocateLoadBalancerNodePorts"></a>

```go
func ResetAllocateLoadBalancerNodePorts()
```

##### `ResetClusterIp` <a name="ResetClusterIp" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetClusterIp"></a>

```go
func ResetClusterIp()
```

##### `ResetClusterIps` <a name="ResetClusterIps" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetClusterIps"></a>

```go
func ResetClusterIps()
```

##### `ResetExternalIps` <a name="ResetExternalIps" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalIps"></a>

```go
func ResetExternalIps()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalName"></a>

```go
func ResetExternalName()
```

##### `ResetExternalTrafficPolicy` <a name="ResetExternalTrafficPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetExternalTrafficPolicy"></a>

```go
func ResetExternalTrafficPolicy()
```

##### `ResetHealthCheckNodePort` <a name="ResetHealthCheckNodePort" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetHealthCheckNodePort"></a>

```go
func ResetHealthCheckNodePort()
```

##### `ResetInternalTrafficPolicy` <a name="ResetInternalTrafficPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetInternalTrafficPolicy"></a>

```go
func ResetInternalTrafficPolicy()
```

##### `ResetIpFamilies` <a name="ResetIpFamilies" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetIpFamilies"></a>

```go
func ResetIpFamilies()
```

##### `ResetIpFamilyPolicy` <a name="ResetIpFamilyPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetIpFamilyPolicy"></a>

```go
func ResetIpFamilyPolicy()
```

##### `ResetLoadBalancerClass` <a name="ResetLoadBalancerClass" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerClass"></a>

```go
func ResetLoadBalancerClass()
```

##### `ResetLoadBalancerIp` <a name="ResetLoadBalancerIp" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerIp"></a>

```go
func ResetLoadBalancerIp()
```

##### `ResetLoadBalancerSourceRanges` <a name="ResetLoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetLoadBalancerSourceRanges"></a>

```go
func ResetLoadBalancerSourceRanges()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPublishNotReadyAddresses` <a name="ResetPublishNotReadyAddresses" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetPublishNotReadyAddresses"></a>

```go
func ResetPublishNotReadyAddresses()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSelector"></a>

```go
func ResetSelector()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSessionAffinity"></a>

```go
func ResetSessionAffinity()
```

##### `ResetSessionAffinityConfig` <a name="ResetSessionAffinityConfig" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetSessionAffinityConfig"></a>

```go
func ResetSessionAffinityConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList">ServiceSpecPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityConfig">SessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference">ServiceSpecSessionAffinityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.allocateLoadBalancerNodePortsInput">AllocateLoadBalancerNodePortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIpInput">ClusterIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIpsInput">ClusterIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalIpsInput">ExternalIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalNameInput">ExternalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalTrafficPolicyInput">ExternalTrafficPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.healthCheckNodePortInput">HealthCheckNodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalTrafficPolicyInput">InternalTrafficPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamiliesInput">IpFamiliesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilyPolicyInput">IpFamilyPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerClassInput">LoadBalancerClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerIpInput">LoadBalancerIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerSourceRangesInput">LoadBalancerSourceRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.portInput">PortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.publishNotReadyAddressesInput">PublishNotReadyAddressesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityConfigInput">SessionAffinityConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.allocateLoadBalancerNodePorts">AllocateLoadBalancerNodePorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIp">ClusterIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIps">ClusterIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalIps">ExternalIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalName">ExternalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalTrafficPolicy">ExternalTrafficPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.healthCheckNodePort">HealthCheckNodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalTrafficPolicy">InternalTrafficPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilies">IpFamilies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilyPolicy">IpFamilyPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerClass">LoadBalancerClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerIp">LoadBalancerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerSourceRanges">LoadBalancerSourceRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.publishNotReadyAddresses">PublishNotReadyAddresses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.selector">Selector</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.port"></a>

```go
func Port() ServiceSpecPortList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList">ServiceSpecPortList</a>

---

##### `SessionAffinityConfig`<sup>Required</sup> <a name="SessionAffinityConfig" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityConfig"></a>

```go
func SessionAffinityConfig() ServiceSpecSessionAffinityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference">ServiceSpecSessionAffinityConfigOutputReference</a>

---

##### `AllocateLoadBalancerNodePortsInput`<sup>Optional</sup> <a name="AllocateLoadBalancerNodePortsInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.allocateLoadBalancerNodePortsInput"></a>

```go
func AllocateLoadBalancerNodePortsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIpInput`<sup>Optional</sup> <a name="ClusterIpInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIpInput"></a>

```go
func ClusterIpInput() *string
```

- *Type:* *string

---

##### `ClusterIpsInput`<sup>Optional</sup> <a name="ClusterIpsInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIpsInput"></a>

```go
func ClusterIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalIpsInput`<sup>Optional</sup> <a name="ExternalIpsInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalIpsInput"></a>

```go
func ExternalIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalNameInput"></a>

```go
func ExternalNameInput() *string
```

- *Type:* *string

---

##### `ExternalTrafficPolicyInput`<sup>Optional</sup> <a name="ExternalTrafficPolicyInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalTrafficPolicyInput"></a>

```go
func ExternalTrafficPolicyInput() *string
```

- *Type:* *string

---

##### `HealthCheckNodePortInput`<sup>Optional</sup> <a name="HealthCheckNodePortInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.healthCheckNodePortInput"></a>

```go
func HealthCheckNodePortInput() *f64
```

- *Type:* *f64

---

##### `InternalTrafficPolicyInput`<sup>Optional</sup> <a name="InternalTrafficPolicyInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalTrafficPolicyInput"></a>

```go
func InternalTrafficPolicyInput() *string
```

- *Type:* *string

---

##### `IpFamiliesInput`<sup>Optional</sup> <a name="IpFamiliesInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamiliesInput"></a>

```go
func IpFamiliesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpFamilyPolicyInput`<sup>Optional</sup> <a name="IpFamilyPolicyInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilyPolicyInput"></a>

```go
func IpFamilyPolicyInput() *string
```

- *Type:* *string

---

##### `LoadBalancerClassInput`<sup>Optional</sup> <a name="LoadBalancerClassInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerClassInput"></a>

```go
func LoadBalancerClassInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIpInput`<sup>Optional</sup> <a name="LoadBalancerIpInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerIpInput"></a>

```go
func LoadBalancerIpInput() *string
```

- *Type:* *string

---

##### `LoadBalancerSourceRangesInput`<sup>Optional</sup> <a name="LoadBalancerSourceRangesInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerSourceRangesInput"></a>

```go
func LoadBalancerSourceRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.portInput"></a>

```go
func PortInput() interface{}
```

- *Type:* interface{}

---

##### `PublishNotReadyAddressesInput`<sup>Optional</sup> <a name="PublishNotReadyAddressesInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.publishNotReadyAddressesInput"></a>

```go
func PublishNotReadyAddressesInput() interface{}
```

- *Type:* interface{}

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SessionAffinityConfigInput`<sup>Optional</sup> <a name="SessionAffinityConfigInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityConfigInput"></a>

```go
func SessionAffinityConfigInput() ServiceSpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a>

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinityInput"></a>

```go
func SessionAffinityInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllocateLoadBalancerNodePorts`<sup>Required</sup> <a name="AllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.allocateLoadBalancerNodePorts"></a>

```go
func AllocateLoadBalancerNodePorts() interface{}
```

- *Type:* interface{}

---

##### `ClusterIp`<sup>Required</sup> <a name="ClusterIp" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIp"></a>

```go
func ClusterIp() *string
```

- *Type:* *string

---

##### `ClusterIps`<sup>Required</sup> <a name="ClusterIps" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.clusterIps"></a>

```go
func ClusterIps() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalIps`<sup>Required</sup> <a name="ExternalIps" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalIps"></a>

```go
func ExternalIps() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalName"></a>

```go
func ExternalName() *string
```

- *Type:* *string

---

##### `ExternalTrafficPolicy`<sup>Required</sup> <a name="ExternalTrafficPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.externalTrafficPolicy"></a>

```go
func ExternalTrafficPolicy() *string
```

- *Type:* *string

---

##### `HealthCheckNodePort`<sup>Required</sup> <a name="HealthCheckNodePort" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.healthCheckNodePort"></a>

```go
func HealthCheckNodePort() *f64
```

- *Type:* *f64

---

##### `InternalTrafficPolicy`<sup>Required</sup> <a name="InternalTrafficPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalTrafficPolicy"></a>

```go
func InternalTrafficPolicy() *string
```

- *Type:* *string

---

##### `IpFamilies`<sup>Required</sup> <a name="IpFamilies" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilies"></a>

```go
func IpFamilies() *[]*string
```

- *Type:* *[]*string

---

##### `IpFamilyPolicy`<sup>Required</sup> <a name="IpFamilyPolicy" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.ipFamilyPolicy"></a>

```go
func IpFamilyPolicy() *string
```

- *Type:* *string

---

##### `LoadBalancerClass`<sup>Required</sup> <a name="LoadBalancerClass" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerClass"></a>

```go
func LoadBalancerClass() *string
```

- *Type:* *string

---

##### `LoadBalancerIp`<sup>Required</sup> <a name="LoadBalancerIp" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerIp"></a>

```go
func LoadBalancerIp() *string
```

- *Type:* *string

---

##### `LoadBalancerSourceRanges`<sup>Required</sup> <a name="LoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.loadBalancerSourceRanges"></a>

```go
func LoadBalancerSourceRanges() *[]*string
```

- *Type:* *[]*string

---

##### `PublishNotReadyAddresses`<sup>Required</sup> <a name="PublishNotReadyAddresses" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.publishNotReadyAddresses"></a>

```go
func PublishNotReadyAddresses() interface{}
```

- *Type:* interface{}

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.selector"></a>

```go
func Selector() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.sessionAffinity"></a>

```go
func SessionAffinity() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceSpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpec">ServiceSpec</a>

---


### ServiceSpecPortList <a name="ServiceSpecPortList" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceSpecPortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceSpecPortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.get"></a>

```go
func Get(index *f64) ServiceSpecPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceSpecPortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceSpecPortOutputReference <a name="ServiceSpecPortOutputReference" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceSpecPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceSpecPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetAppProtocol">ResetAppProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetNodePort">ResetNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetTargetPort">ResetTargetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppProtocol` <a name="ResetAppProtocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetAppProtocol"></a>

```go
func ResetAppProtocol()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNodePort` <a name="ResetNodePort" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetNodePort"></a>

```go
func ResetNodePort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetTargetPort` <a name="ResetTargetPort" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.resetTargetPort"></a>

```go
func ResetTargetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.appProtocolInput">AppProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nodePortInput">NodePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.targetPortInput">TargetPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.appProtocol">AppProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nodePort">NodePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.targetPort">TargetPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppProtocolInput`<sup>Optional</sup> <a name="AppProtocolInput" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.appProtocolInput"></a>

```go
func AppProtocolInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodePortInput`<sup>Optional</sup> <a name="NodePortInput" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nodePortInput"></a>

```go
func NodePortInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TargetPortInput`<sup>Optional</sup> <a name="TargetPortInput" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.targetPortInput"></a>

```go
func TargetPortInput() *string
```

- *Type:* *string

---

##### `AppProtocol`<sup>Required</sup> <a name="AppProtocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.appProtocol"></a>

```go
func AppProtocol() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodePort`<sup>Required</sup> <a name="NodePort" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.nodePort"></a>

```go
func NodePort() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.targetPort"></a>

```go
func TargetPort() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceSpecPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceSpecSessionAffinityConfigClientIpOutputReference <a name="ServiceSpecSessionAffinityConfigClientIpOutputReference" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceSpecSessionAffinityConfigClientIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceSpecSessionAffinityConfigClientIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceSpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a>

---


### ServiceSpecSessionAffinityConfigOutputReference <a name="ServiceSpecSessionAffinityConfigOutputReference" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceSpecSessionAffinityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceSpecSessionAffinityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.putClientIp">PutClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resetClientIp">ResetClientIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientIp` <a name="PutClientIp" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.putClientIp"></a>

```go
func PutClientIp(value ServiceSpecSessionAffinityConfigClientIp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.putClientIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a>

---

##### `ResetClientIp` <a name="ResetClientIp" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.resetClientIp"></a>

```go
func ResetClientIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.clientIp">ClientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference">ServiceSpecSessionAffinityConfigClientIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.clientIpInput">ClientIpInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.clientIp"></a>

```go
func ClientIp() ServiceSpecSessionAffinityConfigClientIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIpOutputReference">ServiceSpecSessionAffinityConfigClientIpOutputReference</a>

---

##### `ClientIpInput`<sup>Optional</sup> <a name="ClientIpInput" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.clientIpInput"></a>

```go
func ClientIpInput() ServiceSpecSessionAffinityConfigClientIp
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigClientIp">ServiceSpecSessionAffinityConfigClientIp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceSpecSessionAffinityConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceSpecSessionAffinityConfig">ServiceSpecSessionAffinityConfig</a>

---


### ServiceStatusList <a name="ServiceStatusList" id="@cdktf/provider-kubernetes.service.ServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.service.ServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.service.ServiceStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.service.ServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.service.ServiceStatusList.get"></a>

```go
func Get(index *f64) ServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.service.ServiceStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ServiceStatusLoadBalancerIngressList <a name="ServiceStatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceStatusLoadBalancerIngressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceStatusLoadBalancerIngressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.get"></a>

```go
func Get(index *f64) ServiceStatusLoadBalancerIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ServiceStatusLoadBalancerIngressOutputReference <a name="ServiceStatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceStatusLoadBalancerIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceStatusLoadBalancerIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngress">ServiceStatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceStatusLoadBalancerIngress
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngress">ServiceStatusLoadBalancerIngress</a>

---


### ServiceStatusLoadBalancerList <a name="ServiceStatusLoadBalancerList" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceStatusLoadBalancerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceStatusLoadBalancerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.get"></a>

```go
func Get(index *f64) ServiceStatusLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ServiceStatusLoadBalancerOutputReference <a name="ServiceStatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceStatusLoadBalancerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceStatusLoadBalancerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList">ServiceStatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancer">ServiceStatusLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.ingress"></a>

```go
func Ingress() ServiceStatusLoadBalancerIngressList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerIngressList">ServiceStatusLoadBalancerIngressList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceStatusLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancer">ServiceStatusLoadBalancer</a>

---


### ServiceStatusOutputReference <a name="ServiceStatusOutputReference" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList">ServiceStatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.service.ServiceStatus">ServiceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.loadBalancer"></a>

```go
func LoadBalancer() ServiceStatusLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatusLoadBalancerList">ServiceStatusLoadBalancerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceStatus
```

- *Type:* <a href="#@cdktf/provider-kubernetes.service.ServiceStatus">ServiceStatus</a>

---


### ServiceTimeoutsOutputReference <a name="ServiceTimeoutsOutputReference" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/service"

service.NewServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.service.ServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



