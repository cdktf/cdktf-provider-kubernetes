# `env` Submodule <a name="`env` Submodule" id="@cdktf/provider-kubernetes.env"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Env <a name="Env" id="@cdktf/provider-kubernetes.env.Env"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env kubernetes_env}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.Env.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new Env(Construct Scope, string Id, EnvConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig">EnvConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvConfig">EnvConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetFieldManager">ResetFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetInitContainer">ResetInitContainer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.Env.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.env.Env.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.env.Env.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.Env.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.env.Env.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.env.Env.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.env.Env.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.env.Env.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.env.Env.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.env.Env.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.env.Env.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.env.Env.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.env.Env.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.env.Env.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.env.Env.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.env.Env.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.env.Env.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.env.Env.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.env.Env.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.Env.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.env.Env.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.env.Env.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.env.Env.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.env.Env.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.env.Env.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.env.Env.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.env.Env.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-kubernetes.env.Env.putEnv"></a>

```csharp
private void PutEnv(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.Env.putEnv.parameter.value"></a>

- *Type:* object

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.env.Env.putMetadata"></a>

```csharp
private void PutMetadata(EnvMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.Env.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-kubernetes.env.Env.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetFieldManager` <a name="ResetFieldManager" id="@cdktf/provider-kubernetes.env.Env.resetFieldManager"></a>

```csharp
private void ResetFieldManager()
```

##### `ResetForce` <a name="ResetForce" id="@cdktf/provider-kubernetes.env.Env.resetForce"></a>

```csharp
private void ResetForce()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.env.Env.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitContainer` <a name="ResetInitContainer" id="@cdktf/provider-kubernetes.env.Env.resetInitContainer"></a>

```csharp
private void ResetInitContainer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Env resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.env.Env.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

Env.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.env.Env.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.env.Env.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

Env.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.env.Env.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.env.Env.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

Env.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.env.Env.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

Env.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Env resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Env to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Env that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.env.Env.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Env to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.env">Env</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList">EnvEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference">EnvMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.envInput">EnvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fieldManagerInput">FieldManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.forceInput">ForceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.initContainerInput">InitContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fieldManager">FieldManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.force">Force</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.initContainer">InitContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.kind">Kind</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.env.Env.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.env.Env.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.Env.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.env.Env.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.env.Env.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.env.Env.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.env.Env.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.env.Env.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.env.Env.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.env.Env.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.env.Env.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.env.Env.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.env.Env.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.env.Env.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-kubernetes.env.Env.property.env"></a>

```csharp
public EnvEnvList Env { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvList">EnvEnvList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.env.Env.property.metadata"></a>

```csharp
public EnvMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference">EnvMetadataOutputReference</a>

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.env.Env.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-kubernetes.env.Env.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-kubernetes.env.Env.property.envInput"></a>

```csharp
public object EnvInput { get; }
```

- *Type:* object

---

##### `FieldManagerInput`<sup>Optional</sup> <a name="FieldManagerInput" id="@cdktf/provider-kubernetes.env.Env.property.fieldManagerInput"></a>

```csharp
public string FieldManagerInput { get; }
```

- *Type:* string

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktf/provider-kubernetes.env.Env.property.forceInput"></a>

```csharp
public object ForceInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.env.Env.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitContainerInput`<sup>Optional</sup> <a name="InitContainerInput" id="@cdktf/provider-kubernetes.env.Env.property.initContainerInput"></a>

```csharp
public string InitContainerInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.env.Env.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.env.Env.property.metadataInput"></a>

```csharp
public EnvMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.env.Env.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-kubernetes.env.Env.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `FieldManager`<sup>Required</sup> <a name="FieldManager" id="@cdktf/provider-kubernetes.env.Env.property.fieldManager"></a>

```csharp
public string FieldManager { get; }
```

- *Type:* string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktf/provider-kubernetes.env.Env.property.force"></a>

```csharp
public object Force { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.env.Env.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitContainer`<sup>Required</sup> <a name="InitContainer" id="@cdktf/provider-kubernetes.env.Env.property.initContainer"></a>

```csharp
public string InitContainer { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.env.Env.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.env.Env.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvConfig <a name="EnvConfig" id="@cdktf/provider-kubernetes.env.EnvConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiVersion,
    object Env,
    string Kind,
    EnvMetadata Metadata,
    string Container = null,
    string FieldManager = null,
    object Force = null,
    string Id = null,
    string InitContainer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.apiVersion">ApiVersion</a></code> | <code>string</code> | Resource API version. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.env">Env</a></code> | <code>object</code> | env block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.kind">Kind</a></code> | <code>string</code> | Resource Kind. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.container">Container</a></code> | <code>string</code> | Name of the container for which we are updating the environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.fieldManager">FieldManager</a></code> | <code>string</code> | Set the name of the field manager for the specified environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.force">Force</a></code> | <code>object</code> | Force overwriting environments that were created or edited outside of Terraform. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#id Env#id}. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.initContainer">InitContainer</a></code> | <code>string</code> | Name of the initContainer for which we are updating the environment variables. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.env.EnvConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.env.EnvConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.env.EnvConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.env.EnvConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.env.EnvConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.env.EnvConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.env.EnvConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.env.EnvConfig.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

Resource API version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#api_version Env#api_version}

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-kubernetes.env.EnvConfig.property.env"></a>

```csharp
public object Env { get; set; }
```

- *Type:* object

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#env Env#env}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.env.EnvConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Resource Kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#kind Env#kind}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.env.EnvConfig.property.metadata"></a>

```csharp
public EnvMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#metadata Env#metadata}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-kubernetes.env.EnvConfig.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

Name of the container for which we are updating the environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#container Env#container}

---

##### `FieldManager`<sup>Optional</sup> <a name="FieldManager" id="@cdktf/provider-kubernetes.env.EnvConfig.property.fieldManager"></a>

```csharp
public string FieldManager { get; set; }
```

- *Type:* string

Set the name of the field manager for the specified environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#field_manager Env#field_manager}

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktf/provider-kubernetes.env.EnvConfig.property.force"></a>

```csharp
public object Force { get; set; }
```

- *Type:* object

Force overwriting environments that were created or edited outside of Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#force Env#force}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.env.EnvConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#id Env#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitContainer`<sup>Optional</sup> <a name="InitContainer" id="@cdktf/provider-kubernetes.env.EnvConfig.property.initContainer"></a>

```csharp
public string InitContainer { get; set; }
```

- *Type:* string

Name of the initContainer for which we are updating the environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#init_container Env#init_container}

---

### EnvEnv <a name="EnvEnv" id="@cdktf/provider-kubernetes.env.EnvEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnv {
    string Name,
    string Value = null,
    EnvEnvValueFrom ValueFrom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.value">Value</a></code> | <code>string</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | value_from block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.env.EnvEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#name Env#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.EnvEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#value Env#value}

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnv.property.valueFrom"></a>

```csharp
public EnvEnvValueFrom ValueFrom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#value_from Env#value_from}

---

### EnvEnvValueFrom <a name="EnvEnvValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFrom {
    EnvEnvValueFromConfigMapKeyRef ConfigMapKeyRef = null,
    EnvEnvValueFromFieldRef FieldRef = null,
    EnvEnvValueFromResourceFieldRef ResourceFieldRef = null,
    EnvEnvValueFromSecretKeyRef SecretKeyRef = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.configMapKeyRef">ConfigMapKeyRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | config_map_key_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.fieldRef">FieldRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | field_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.resourceFieldRef">ResourceFieldRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | resource_field_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `ConfigMapKeyRef`<sup>Optional</sup> <a name="ConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.configMapKeyRef"></a>

```csharp
public EnvEnvValueFromConfigMapKeyRef ConfigMapKeyRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

config_map_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#config_map_key_ref Env#config_map_key_ref}

---

##### `FieldRef`<sup>Optional</sup> <a name="FieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.fieldRef"></a>

```csharp
public EnvEnvValueFromFieldRef FieldRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#field_ref Env#field_ref}

---

##### `ResourceFieldRef`<sup>Optional</sup> <a name="ResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.resourceFieldRef"></a>

```csharp
public EnvEnvValueFromResourceFieldRef ResourceFieldRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

resource_field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#resource_field_ref Env#resource_field_ref}

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.secretKeyRef"></a>

```csharp
public EnvEnvValueFromSecretKeyRef SecretKeyRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#secret_key_ref Env#secret_key_ref}

---

### EnvEnvValueFromConfigMapKeyRef <a name="EnvEnvValueFromConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromConfigMapKeyRef {
    string Key = null,
    string Name = null,
    object Optional = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.key">Key</a></code> | <code>string</code> | The key to select. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.optional">Optional</a></code> | <code>object</code> | Specify whether the ConfigMap or its key must be defined. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#key Env#key}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#name Env#name}

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.optional"></a>

```csharp
public object Optional { get; set; }
```

- *Type:* object

Specify whether the ConfigMap or its key must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#optional Env#optional}

---

### EnvEnvValueFromFieldRef <a name="EnvEnvValueFromFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromFieldRef {
    string ApiVersion = null,
    string FieldPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.apiVersion">ApiVersion</a></code> | <code>string</code> | Version of the schema the FieldPath is written in terms of, defaults to "v1". |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.fieldPath">FieldPath</a></code> | <code>string</code> | Path of the field to select in the specified API version. |

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

Version of the schema the FieldPath is written in terms of, defaults to "v1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#api_version Env#api_version}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.fieldPath"></a>

```csharp
public string FieldPath { get; set; }
```

- *Type:* string

Path of the field to select in the specified API version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#field_path Env#field_path}

---

### EnvEnvValueFromResourceFieldRef <a name="EnvEnvValueFromResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromResourceFieldRef {
    string Resource,
    string ContainerName = null,
    string Divisor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.resource">Resource</a></code> | <code>string</code> | Resource to select. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#container_name Env#container_name}. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.divisor">Divisor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#divisor Env#divisor}. |

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Resource to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#resource Env#resource}

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#container_name Env#container_name}.

---

##### `Divisor`<sup>Optional</sup> <a name="Divisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.divisor"></a>

```csharp
public string Divisor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#divisor Env#divisor}.

---

### EnvEnvValueFromSecretKeyRef <a name="EnvEnvValueFromSecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromSecretKeyRef {
    string Key = null,
    string Name = null,
    object Optional = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.key">Key</a></code> | <code>string</code> | The key of the secret to select from. Must be a valid secret key. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.optional">Optional</a></code> | <code>object</code> | Specify whether the Secret or its key must be defined. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the secret to select from. Must be a valid secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#key Env#key}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#name Env#name}

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.optional"></a>

```csharp
public object Optional { get; set; }
```

- *Type:* object

Specify whether the Secret or its key must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#optional Env#optional}

---

### EnvMetadata <a name="EnvMetadata" id="@cdktf/provider-kubernetes.env.EnvMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvMetadata {
    string Name,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata.property.name">Name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata.property.namespace">Namespace</a></code> | <code>string</code> | The namespace of the resource. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.env.EnvMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#name Env#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.env.EnvMetadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/env#namespace Env#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### EnvEnvList <a name="EnvEnvList" id="@cdktf/provider-kubernetes.env.EnvEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.env.EnvEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.env.EnvEnvList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.EnvEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.env.EnvEnvList.get"></a>

```csharp
private EnvEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.env.EnvEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EnvEnvOutputReference <a name="EnvEnvOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom">PutValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueFrom` <a name="PutValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom"></a>

```csharp
private void PutValueFrom(EnvEnvValueFrom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValueFrom"></a>

```csharp
private void ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference">EnvEnvValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFrom"></a>

```csharp
public EnvEnvValueFromOutputReference ValueFrom { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference">EnvEnvValueFromOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFromInput"></a>

```csharp
public EnvEnvValueFrom ValueFromInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EnvEnvValueFromConfigMapKeyRefOutputReference <a name="EnvEnvValueFromConfigMapKeyRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromConfigMapKeyRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOptional` <a name="ResetOptional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetOptional"></a>

```csharp
private void ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optionalInput">OptionalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optional">Optional</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optionalInput"></a>

```csharp
public object OptionalInput { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optional"></a>

```csharp
public object Optional { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.internalValue"></a>

```csharp
public EnvEnvValueFromConfigMapKeyRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

---


### EnvEnvValueFromFieldRefOutputReference <a name="EnvEnvValueFromFieldRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromFieldRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetApiVersion">ResetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetApiVersion"></a>

```csharp
private void ResetApiVersion()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetFieldPath"></a>

```csharp
private void ResetFieldPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPath">FieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPathInput"></a>

```csharp
public string FieldPathInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPath"></a>

```csharp
public string FieldPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.internalValue"></a>

```csharp
public EnvEnvValueFromFieldRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

---


### EnvEnvValueFromOutputReference <a name="EnvEnvValueFromOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef">PutConfigMapKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef">PutFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef">PutResourceFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetConfigMapKeyRef">ResetConfigMapKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetFieldRef">ResetFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetResourceFieldRef">ResetResourceFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigMapKeyRef` <a name="PutConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef"></a>

```csharp
private void PutConfigMapKeyRef(EnvEnvValueFromConfigMapKeyRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

---

##### `PutFieldRef` <a name="PutFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef"></a>

```csharp
private void PutFieldRef(EnvEnvValueFromFieldRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

---

##### `PutResourceFieldRef` <a name="PutResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef"></a>

```csharp
private void PutResourceFieldRef(EnvEnvValueFromResourceFieldRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

---

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef"></a>

```csharp
private void PutSecretKeyRef(EnvEnvValueFromSecretKeyRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

---

##### `ResetConfigMapKeyRef` <a name="ResetConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetConfigMapKeyRef"></a>

```csharp
private void ResetConfigMapKeyRef()
```

##### `ResetFieldRef` <a name="ResetFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetFieldRef"></a>

```csharp
private void ResetFieldRef()
```

##### `ResetResourceFieldRef` <a name="ResetResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetResourceFieldRef"></a>

```csharp
private void ResetResourceFieldRef()
```

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetSecretKeyRef"></a>

```csharp
private void ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRef">ConfigMapKeyRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference">EnvEnvValueFromConfigMapKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRef">FieldRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference">EnvEnvValueFromFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRef">ResourceFieldRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference">EnvEnvValueFromResourceFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference">EnvEnvValueFromSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRefInput">ConfigMapKeyRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRefInput">FieldRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRefInput">ResourceFieldRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigMapKeyRef`<sup>Required</sup> <a name="ConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRef"></a>

```csharp
public EnvEnvValueFromConfigMapKeyRefOutputReference ConfigMapKeyRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference">EnvEnvValueFromConfigMapKeyRefOutputReference</a>

---

##### `FieldRef`<sup>Required</sup> <a name="FieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRef"></a>

```csharp
public EnvEnvValueFromFieldRefOutputReference FieldRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference">EnvEnvValueFromFieldRefOutputReference</a>

---

##### `ResourceFieldRef`<sup>Required</sup> <a name="ResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRef"></a>

```csharp
public EnvEnvValueFromResourceFieldRefOutputReference ResourceFieldRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference">EnvEnvValueFromResourceFieldRefOutputReference</a>

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRef"></a>

```csharp
public EnvEnvValueFromSecretKeyRefOutputReference SecretKeyRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference">EnvEnvValueFromSecretKeyRefOutputReference</a>

---

##### `ConfigMapKeyRefInput`<sup>Optional</sup> <a name="ConfigMapKeyRefInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRefInput"></a>

```csharp
public EnvEnvValueFromConfigMapKeyRef ConfigMapKeyRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

---

##### `FieldRefInput`<sup>Optional</sup> <a name="FieldRefInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRefInput"></a>

```csharp
public EnvEnvValueFromFieldRef FieldRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

---

##### `ResourceFieldRefInput`<sup>Optional</sup> <a name="ResourceFieldRefInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRefInput"></a>

```csharp
public EnvEnvValueFromResourceFieldRef ResourceFieldRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRefInput"></a>

```csharp
public EnvEnvValueFromSecretKeyRef SecretKeyRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.internalValue"></a>

```csharp
public EnvEnvValueFrom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

---


### EnvEnvValueFromResourceFieldRefOutputReference <a name="EnvEnvValueFromResourceFieldRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromResourceFieldRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetDivisor">ResetDivisor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetContainerName"></a>

```csharp
private void ResetContainerName()
```

##### `ResetDivisor` <a name="ResetDivisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetDivisor"></a>

```csharp
private void ResetDivisor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisorInput">DivisorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisor">Divisor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `DivisorInput`<sup>Optional</sup> <a name="DivisorInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisorInput"></a>

```csharp
public string DivisorInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `Divisor`<sup>Required</sup> <a name="Divisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisor"></a>

```csharp
public string Divisor { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.internalValue"></a>

```csharp
public EnvEnvValueFromResourceFieldRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

---


### EnvEnvValueFromSecretKeyRefOutputReference <a name="EnvEnvValueFromSecretKeyRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvEnvValueFromSecretKeyRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOptional` <a name="ResetOptional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetOptional"></a>

```csharp
private void ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optionalInput">OptionalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optional">Optional</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optionalInput"></a>

```csharp
public object OptionalInput { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optional"></a>

```csharp
public object Optional { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```csharp
public EnvEnvValueFromSecretKeyRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

---


### EnvMetadataOutputReference <a name="EnvMetadataOutputReference" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new EnvMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.internalValue"></a>

```csharp
public EnvMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

---



